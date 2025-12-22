# CORS 跨域问题修复说明

## 问题分析

前端发送的认证 header 是 `BARCKE-TOKEN`，但后端 CORS 配置中允许的 headers 列表不包含 `BARCKE-TOKEN`，导致浏览器的预检请求（OPTIONS）失败。

## 后端需要修改

在 `CORSSignatureInterceptor` 类中，需要将 `BARCKE-TOKEN` 添加到允许的 headers 列表中。

### 修改前：

```java
response.setHeader("Access-Control-Allow-Headers", "content-type, Authorization, TOKEN, Auth-Info,token");
```

### 修改后：

```java
response.setHeader("Access-Control-Allow-Headers", "content-type, Authorization, TOKEN, Auth-Info, token, BARCKE-TOKEN");
```

### 完整的修改后的代码：

```java
public class CORSSignatureInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object o) throws Exception {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "*");
        response.setHeader("Access-Control-Max-Age", "3600");
        // 添加 BARCKE-TOKEN 到允许的 headers
        response.setHeader("Access-Control-Allow-Headers", "content-type, Authorization, TOKEN, Auth-Info, token, BARCKE-TOKEN");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        
        if ("OPTIONS".equals(request.getMethod())) {
            response.setHeader("Access-Control-Allow-Origin", "*");
            response.setHeader("Access-Control-Allow-Methods", "*");
            response.setHeader("Access-Control-Max-Age", "3600");
            // 添加 BARCKE-TOKEN 到允许的 headers（OPTIONS 预检请求也需要）
            response.setHeader("Access-Control-Allow-Headers", "content-type, Authorization, TOKEN, Auth-Info, token, BARCKE-TOKEN");
            response.setHeader("Access-Control-Allow-Credentials", "true");
            response.setStatus(200);
            return false; // OPTIONS 请求直接返回，不继续处理
        }
        
        return true;
    }
}
```

## 注意事项

1. **两个地方都需要修改**：普通请求处理和 OPTIONS 预检请求处理都需要添加 `BARCKE-TOKEN`
2. **大小写敏感**：确保 header 名称与前端发送的一致（`BARCKE-TOKEN`）
3. **测试**：修改后需要重启后端服务，并在浏览器中测试是否还有 CORS 错误

## 验证方法

修改后，在浏览器开发者工具的 Network 标签中：
1. 查看 OPTIONS 预检请求，应该返回 200 状态码
2. 查看实际的 API 请求，不应该再出现 CORS 错误
3. 检查响应头中是否包含 `Access-Control-Allow-Headers`，且包含 `BARCKE-TOKEN`

