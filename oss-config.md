# OSS 静态网站托管配置说明

## 路由重写规则

由于 Next.js 静态导出生成的是 `login.html`、`register.html` 等文件，而前端路由使用的是 `/login`、`register` 等路径，需要在 OSS 中配置重写规则。

### 阿里云 OSS 配置

在 OSS 控制台的"静态网站托管"功能中，配置以下重写规则：

```json
[
  {
    "RuleNumber": 1,
    "Condition": {
      "KeyPrefixEquals": "/login"
    },
    "Redirect": {
      "ReplaceKeyWith": "login.html"
    }
  },
  {
    "RuleNumber": 2,
    "Condition": {
      "KeyPrefixEquals": "/register"
    },
    "Redirect": {
      "ReplaceKeyWith": "register.html"
    }
  },
  {
    "RuleNumber": 3,
    "Condition": {
      "KeyPrefixEquals": "/profile"
    },
    "Redirect": {
      "ReplaceKeyWith": "profile.html"
    }
  }
]
```

### 腾讯云 COS 配置

在 COS 控制台的"静态网站"功能中，配置重写规则（使用 XML 格式）：

```xml
<RoutingRules>
  <RoutingRule>
    <Condition>
      <KeyPrefixEquals>/login</KeyPrefixEquals>
    </Condition>
    <Redirect>
      <ReplaceKeyWith>login.html</ReplaceKeyWith>
    </Redirect>
  </RoutingRule>
  <RoutingRule>
    <Condition>
      <KeyPrefixEquals>/register</KeyPrefixEquals>
    </Condition>
    <Redirect>
      <ReplaceKeyWith>register.html</ReplaceKeyWith>
    </Redirect>
  </RoutingRule>
  <RoutingRule>
    <Condition>
      <KeyPrefixEquals>/profile</KeyPrefixEquals>
    </Condition>
    <Redirect>
      <ReplaceKeyWith>profile.html</ReplaceKeyWith>
    </Redirect>
  </RoutingRule>
</RoutingRules>
```

### 其他 OSS 服务

如果使用其他 OSS 服务，请参考其文档配置类似的重写规则，将 `/路径` 重定向到 `路径.html`。

## 注意事项

1. 确保 OSS 已开启"静态网站托管"功能
2. 配置错误页面为 `404.html` 或 `_not-found.html`
3. 如果使用 CDN，需要在 CDN 层面也配置相同的重写规则

