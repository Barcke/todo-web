---
title: 默认模块
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.30"

---

# 默认模块

Base URLs:

# Authentication

# CalendarController

## GET 获取月视图数据（返回日期单元格数组）

GET /calendar/month

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|yearMonth|query|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": [
    {
      "date": "",
      "totalCount": 0,
      "completedCount": 0,
      "completionRate": 0,
      "completedTypeIcons": [
        ""
      ],
      "hasUnfinished": false
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultListCalendarDayResponse](#schemaresultlistcalendardayresponse)|

## GET 获取日视图数据

GET /calendar/day

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|date|query|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": [
    {
      "id": "",
      "title": "",
      "description": "",
      "date": "",
      "time": "",
      "status": "",
      "typeId": "",
      "typeName": "",
      "typeIcon": "",
      "source": "",
      "templateId": "",
      "repeatType": "",
      "repeatRule": {
        "type": "",
        "days": [
          0
        ]
      },
      "attachments": [
        {
          "attachmentId": "",
          "type": "",
          "url": "",
          "previewUrl": "",
          "fileName": "",
          "fileSize": 0,
          "createdAt": ""
        }
      ],
      "createdAt": "",
      "completedAt": "",
      "updatedAt": ""
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultListTodoResponse](#schemaresultlisttodoresponse)|

## GET 获取周视图数据

GET /calendar/week

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|weekStartDate|query|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": [
    {
      "id": "",
      "title": "",
      "description": "",
      "date": "",
      "time": "",
      "status": "",
      "typeId": "",
      "typeName": "",
      "typeIcon": "",
      "source": "",
      "templateId": "",
      "repeatType": "",
      "repeatRule": {
        "type": "",
        "days": [
          0
        ]
      },
      "attachments": [
        {
          "attachmentId": "",
          "type": "",
          "url": "",
          "previewUrl": "",
          "fileName": "",
          "fileSize": 0,
          "createdAt": ""
        }
      ],
      "createdAt": "",
      "completedAt": "",
      "updatedAt": ""
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultListTodoResponse](#schemaresultlisttodoresponse)|

# FileUploadController

## POST 文件上传

POST /files/upload

> Body 请求参数

```yaml
file: string

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|todoId|query|string| 否 |none|
|body|body|object| 否 |none|
|» file|body|string(binary)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": {
    "fileId": "",
    "url": "",
    "fileName": "",
    "fileSize": 0,
    "type": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultFileUploadResponse](#schemaresultfileuploadresponse)|

## GET 文件读取（返回文件流）

GET /files/{fileId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|fileId|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "inputStream": {},
  "readable": false,
  "open": false,
  "file": {
    "path": "",
    "name": "",
    "parent": "",
    "parentFile": {
      "path": "",
      "name": "",
      "parent": "",
      "parentFile": {},
      "absolute": false,
      "absolutePath": "",
      "absoluteFile": {},
      "canonicalPath": "",
      "canonicalFile": {},
      "directory": false,
      "file": false,
      "hidden": false,
      "lastModified": 0,
      "writable": false,
      "readable": false,
      "executable": false,
      "totalSpace": 0,
      "freeSpace": 0,
      "usableSpace": 0
    },
    "absolute": false,
    "absolutePath": "",
    "absoluteFile": {
      "path": "",
      "name": "",
      "parent": "",
      "parentFile": {},
      "absolute": false,
      "absolutePath": "",
      "absoluteFile": {},
      "canonicalPath": "",
      "canonicalFile": {},
      "directory": false,
      "file": false,
      "hidden": false,
      "lastModified": 0,
      "writable": false,
      "readable": false,
      "executable": false,
      "totalSpace": 0,
      "freeSpace": 0,
      "usableSpace": 0
    },
    "canonicalPath": "",
    "canonicalFile": {
      "path": "",
      "name": "",
      "parent": "",
      "parentFile": {},
      "absolute": false,
      "absolutePath": "",
      "absoluteFile": {},
      "canonicalPath": "",
      "canonicalFile": {},
      "directory": false,
      "file": false,
      "hidden": false,
      "lastModified": 0,
      "writable": false,
      "readable": false,
      "executable": false,
      "totalSpace": 0,
      "freeSpace": 0,
      "usableSpace": 0
    },
    "directory": false,
    "file": false,
    "hidden": false,
    "lastModified": 0,
    "writable": false,
    "readable": false,
    "executable": false,
    "totalSpace": 0,
    "freeSpace": 0,
    "usableSpace": 0
  },
  "uRL": "",
  "uRI": {
    "string": "",
    "absolute": false,
    "opaque": false,
    "rawSchemeSpecificPart": "",
    "rawAuthority": "",
    "rawUserInfo": "",
    "rawPath": "",
    "rawQuery": "",
    "rawFragment": ""
  },
  "contentAsByteArray": [
    0
  ],
  "filename": "",
  "description": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResponseEntityResource](#schemaresponseentityresource)|

# StatisticsController

## GET 月度统计

GET /statistics/month

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|yearMonth|query|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": {
    "month": "",
    "totalCount": 0,
    "completedCount": 0,
    "completionRate": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultMonthStatisticsResponse](#schemaresultmonthstatisticsresponse)|

## GET 类型统计

GET /statistics/type

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|yearMonth|query|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": [
    {
      "month": "",
      "typeId": "",
      "typeName": "",
      "typeIcon": "",
      "completedCount": 0
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultListTypeStatisticsResponse](#schemaresultlisttypestatisticsresponse)|

# TodoController

## POST 创建 Todo

POST /todos

> Body 请求参数

```json
{
  "title": "string",
  "description": "string",
  "date": "string",
  "time": "string",
  "typeId": "string",
  "repeatType": "string",
  "repeatRule": {
    "type": "string",
    "days": [
      0
    ]
  },
  "attachmentIds": [
    "string"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[TodoCreateRequest](#schematodocreaterequest)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": {
    "id": "",
    "title": "",
    "description": "",
    "date": "",
    "time": "",
    "status": "",
    "typeId": "",
    "typeName": "",
    "typeIcon": "",
    "source": "",
    "templateId": "",
    "repeatType": "",
    "repeatRule": {
      "type": "",
      "days": [
        0
      ]
    },
    "attachments": [
      {
        "attachmentId": "",
        "type": "",
        "url": "",
        "previewUrl": "",
        "fileName": "",
        "fileSize": 0,
        "createdAt": ""
      }
    ],
    "createdAt": "",
    "completedAt": "",
    "updatedAt": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultTodoResponse](#schemaresulttodoresponse)|

## GET 查询 Todo 列表

GET /todos

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|startDate|query|string| 否 |none|
|endDate|query|string| 否 |none|
|status|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": [
    {
      "id": "",
      "title": "",
      "description": "",
      "date": "",
      "time": "",
      "status": "",
      "typeId": "",
      "typeName": "",
      "typeIcon": "",
      "source": "",
      "templateId": "",
      "repeatType": "",
      "repeatRule": {
        "type": "",
        "days": [
          0
        ]
      },
      "attachments": [
        {
          "attachmentId": "",
          "type": "",
          "url": "",
          "previewUrl": "",
          "fileName": "",
          "fileSize": 0,
          "createdAt": ""
        }
      ],
      "createdAt": "",
      "completedAt": "",
      "updatedAt": ""
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultListTodoResponse](#schemaresultlisttodoresponse)|

## PUT 更新 Todo

PUT /todos/{id}

> Body 请求参数

```json
{
  "title": "string",
  "description": "string",
  "date": "string",
  "time": "string",
  "typeId": "string",
  "repeatType": "string",
  "repeatRule": {
    "type": "string",
    "days": [
      0
    ]
  },
  "attachmentIds": [
    "string"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|body|body|[TodoUpdateRequest](#schematodoupdaterequest)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": {
    "id": "",
    "title": "",
    "description": "",
    "date": "",
    "time": "",
    "status": "",
    "typeId": "",
    "typeName": "",
    "typeIcon": "",
    "source": "",
    "templateId": "",
    "repeatType": "",
    "repeatRule": {
      "type": "",
      "days": [
        0
      ]
    },
    "attachments": [
      {
        "attachmentId": "",
        "type": "",
        "url": "",
        "previewUrl": "",
        "fileName": "",
        "fileSize": 0,
        "createdAt": ""
      }
    ],
    "createdAt": "",
    "completedAt": "",
    "updatedAt": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultTodoResponse](#schemaresulttodoresponse)|

## DELETE 删除 Todo

DELETE /todos/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultString](#schemaresultstring)|

## GET 获取 Todo 详情

GET /todos/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": {
    "id": "",
    "title": "",
    "description": "",
    "date": "",
    "time": "",
    "status": "",
    "typeId": "",
    "typeName": "",
    "typeIcon": "",
    "source": "",
    "templateId": "",
    "repeatType": "",
    "repeatRule": {
      "type": "",
      "days": [
        0
      ]
    },
    "attachments": [
      {
        "attachmentId": "",
        "type": "",
        "url": "",
        "previewUrl": "",
        "fileName": "",
        "fileSize": 0,
        "createdAt": ""
      }
    ],
    "createdAt": "",
    "completedAt": "",
    "updatedAt": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultTodoResponse](#schemaresulttodoresponse)|

## POST 标记完成

POST /todos/{id}/complete

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": {
    "id": "",
    "title": "",
    "description": "",
    "date": "",
    "time": "",
    "status": "",
    "typeId": "",
    "typeName": "",
    "typeIcon": "",
    "source": "",
    "templateId": "",
    "repeatType": "",
    "repeatRule": {
      "type": "",
      "days": [
        0
      ]
    },
    "attachments": [
      {
        "attachmentId": "",
        "type": "",
        "url": "",
        "previewUrl": "",
        "fileName": "",
        "fileSize": 0,
        "createdAt": ""
      }
    ],
    "createdAt": "",
    "completedAt": "",
    "updatedAt": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultTodoResponse](#schemaresulttodoresponse)|

# TodoTemplateController

## POST 创建模板

POST /templates

> Body 请求参数

```json
{
  "templateName": "string",
  "description": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[TemplateCreateRequest](#schematemplatecreaterequest)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": {
    "templateId": "",
    "templateName": "",
    "description": "",
    "todos": [
      {
        "id": "",
        "title": "",
        "typeId": "",
        "typeName": "",
        "typeIcon": "",
        "sortOrder": 0
      }
    ],
    "createdAt": "",
    "updatedAt": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultTemplateResponse](#schemaresulttemplateresponse)|

## GET 获取模板列表

GET /templates

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": [
    {
      "templateId": "",
      "templateName": "",
      "description": "",
      "todos": [
        {
          "id": "",
          "title": "",
          "typeId": "",
          "typeName": "",
          "typeIcon": "",
          "sortOrder": 0
        }
      ],
      "createdAt": "",
      "updatedAt": ""
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultListTemplateResponse](#schemaresultlisttemplateresponse)|

## PUT 更新模板

PUT /templates/{id}

> Body 请求参数

```json
{
  "templateName": "string",
  "description": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|body|body|[TemplateCreateRequest](#schematemplatecreaterequest)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": {
    "templateId": "",
    "templateName": "",
    "description": "",
    "todos": [
      {
        "id": "",
        "title": "",
        "typeId": "",
        "typeName": "",
        "typeIcon": "",
        "sortOrder": 0
      }
    ],
    "createdAt": "",
    "updatedAt": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultTemplateResponse](#schemaresulttemplateresponse)|

## DELETE 删除模板

DELETE /templates/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultString](#schemaresultstring)|

## GET 获取模板详情（含所有项）

GET /templates/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": {
    "templateId": "",
    "templateName": "",
    "description": "",
    "todos": [
      {
        "id": "",
        "title": "",
        "typeId": "",
        "typeName": "",
        "typeIcon": "",
        "sortOrder": 0
      }
    ],
    "createdAt": "",
    "updatedAt": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultTemplateResponse](#schemaresulttemplateresponse)|

## POST 添加模板项

POST /templates/{id}/todos

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|title|query|string| 是 |none|
|typeId|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": {
    "id": "",
    "title": "",
    "typeId": "",
    "typeName": "",
    "typeIcon": "",
    "sortOrder": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultTemplateTodoResponse](#schemaresulttemplatetodoresponse)|

## PUT 更新模板项

PUT /templates/{id}/todos/{todoId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|todoId|path|string| 是 |none|
|title|query|string| 否 |none|
|typeId|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": {
    "id": "",
    "title": "",
    "typeId": "",
    "typeName": "",
    "typeIcon": "",
    "sortOrder": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultTemplateTodoResponse](#schemaresulttemplatetodoresponse)|

## DELETE 删除模板项

DELETE /templates/{id}/todos/{todoId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|todoId|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultString](#schemaresultstring)|

## POST 应用模板生成 Todo

POST /templates/{id}/apply

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|date|query|string| 是 |none|
|time|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": [
    {
      "id": "",
      "title": "",
      "description": "",
      "date": "",
      "time": "",
      "status": "",
      "typeId": "",
      "typeName": "",
      "typeIcon": "",
      "source": "",
      "templateId": "",
      "repeatType": "",
      "repeatRule": {
        "type": "",
        "days": [
          0
        ]
      },
      "attachments": [
        {
          "attachmentId": "",
          "type": "",
          "url": "",
          "previewUrl": "",
          "fileName": "",
          "fileSize": 0,
          "createdAt": ""
        }
      ],
      "createdAt": "",
      "completedAt": "",
      "updatedAt": ""
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultListTodoResponse](#schemaresultlisttodoresponse)|

# TodoTypeController

## POST 创建类型

POST /todo-types

> Body 请求参数

```json
{
  "typeName": "string",
  "icon": "string",
  "color": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[TodoTypeRequest](#schematodotyperequest)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": {
    "typeId": "",
    "typeName": "",
    "icon": "",
    "color": "",
    "createdAt": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultTodoTypeResponse](#schemaresulttodotyperesponse)|

## GET 获取用户所有类型

GET /todo-types

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": [
    {
      "typeId": "",
      "typeName": "",
      "icon": "",
      "color": "",
      "createdAt": ""
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultListTodoTypeResponse](#schemaresultlisttodotyperesponse)|

## PUT 更新类型

PUT /todo-types/{id}

> Body 请求参数

```json
{
  "typeName": "string",
  "icon": "string",
  "color": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|
|body|body|[TodoTypeRequest](#schematodotyperequest)| 否 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": {
    "typeId": "",
    "typeName": "",
    "icon": "",
    "color": "",
    "createdAt": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultTodoTypeResponse](#schemaresulttodotyperesponse)|

## DELETE 删除类型

DELETE /todo-types/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": ""
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultString](#schemaresultstring)|

## GET 根据ID查询类型

GET /todo-types/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "success": false,
  "message": "",
  "data": {
    "typeId": "",
    "typeName": "",
    "icon": "",
    "color": "",
    "createdAt": ""
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResultTodoTypeResponse](#schemaresulttodotyperesponse)|

# 数据模型

<h2 id="tocS_CalendarDayResponse">CalendarDayResponse</h2>

<a id="schemacalendardayresponse"></a>
<a id="schema_CalendarDayResponse"></a>
<a id="tocScalendardayresponse"></a>
<a id="tocscalendardayresponse"></a>

```json
{
  "date": "string",
  "totalCount": 0,
  "completedCount": 0,
  "completionRate": 0,
  "completedTypeIcons": [
    "string"
  ],
  "hasUnfinished": true
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|date|string|false|none||日期|
|totalCount|integer|false|none||当日 Todo 总数|
|completedCount|integer|false|none||已完成数量|
|completionRate|number|false|none||完成比例|
|completedTypeIcons|[string]|false|none||当日完成的 Todo 类型图标列表|
|hasUnfinished|boolean|false|none||是否存在未完成 Todo|

<h2 id="tocS_ResultListCalendarDayResponse">ResultListCalendarDayResponse</h2>

<a id="schemaresultlistcalendardayresponse"></a>
<a id="schema_ResultListCalendarDayResponse"></a>
<a id="tocSresultlistcalendardayresponse"></a>
<a id="tocsresultlistcalendardayresponse"></a>

```json
{
  "success": true,
  "message": "string",
  "data": [
    {
      "date": "string",
      "totalCount": 0,
      "completedCount": 0,
      "completionRate": 0,
      "completedTypeIcons": [
        "string"
      ],
      "hasUnfinished": true
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|success|boolean|false|none||是否成功|
|message|string|false|none||响应消息|
|data|[[CalendarDayResponse](#schemacalendardayresponse)]|false|none||响应数据|

<h2 id="tocS_RepeatRule">RepeatRule</h2>

<a id="schemarepeatrule"></a>
<a id="schema_RepeatRule"></a>
<a id="tocSrepeatrule"></a>
<a id="tocsrepeatrule"></a>

```json
{
  "type": "string",
  "days": [
    0
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|type|string|false|none||重复类型：daily/weekly/monthly|
|days|[integer]|false|none||按周重复：周几的数组（1=周一，7=周日）<br />按月重复：每月的几号数组（1-31）|

<h2 id="tocS_AttachmentResponse">AttachmentResponse</h2>

<a id="schemaattachmentresponse"></a>
<a id="schema_AttachmentResponse"></a>
<a id="tocSattachmentresponse"></a>
<a id="tocsattachmentresponse"></a>

```json
{
  "attachmentId": "string",
  "type": "string",
  "url": "string",
  "previewUrl": "string",
  "fileName": "string",
  "fileSize": 0,
  "createdAt": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|attachmentId|string|false|none||附件ID|
|type|string|false|none||附件类型（image/voice/file）|
|url|string|false|none||文件访问URL|
|previewUrl|string|false|none||预览URL（图片用）|
|fileName|string|false|none||文件名|
|fileSize|integer(int64)|false|none||文件大小（字节）|
|createdAt|string|false|none||创建时间|

<h2 id="tocS_TodoResponse">TodoResponse</h2>

<a id="schematodoresponse"></a>
<a id="schema_TodoResponse"></a>
<a id="tocStodoresponse"></a>
<a id="tocstodoresponse"></a>

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "date": "string",
  "time": "string",
  "status": "string",
  "typeId": "string",
  "typeName": "string",
  "typeIcon": "string",
  "source": "string",
  "templateId": "string",
  "repeatType": "string",
  "repeatRule": {
    "type": "string",
    "days": [
      0
    ]
  },
  "attachments": [
    {
      "attachmentId": "string",
      "type": "string",
      "url": "string",
      "previewUrl": "string",
      "fileName": "string",
      "fileSize": 0,
      "createdAt": "string"
    }
  ],
  "createdAt": "string",
  "completedAt": "string",
  "updatedAt": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||Todo ID|
|title|string|false|none||Todo 内容|
|description|string|false|none||备注/备忘|
|date|string|false|none||任务所属日期|
|time|string|false|none||时间（可选）|
|status|string|false|none||状态（pending/completed）|
|typeId|string|false|none||Todo 类型ID|
|typeName|string|false|none||类型名称|
|typeIcon|string|false|none||类型图标|
|source|string|false|none||来源（normal/template）|
|templateId|string|false|none||模板ID|
|repeatType|string|false|none||重复类型|
|repeatRule|[RepeatRule](#schemarepeatrule)|false|none||重复规则|
|attachments|[[AttachmentResponse](#schemaattachmentresponse)]|false|none||附件列表|
|createdAt|string|false|none||创建时间|
|completedAt|string|false|none||完成时间|
|updatedAt|string|false|none||更新时间|

<h2 id="tocS_ResultListTodoResponse">ResultListTodoResponse</h2>

<a id="schemaresultlisttodoresponse"></a>
<a id="schema_ResultListTodoResponse"></a>
<a id="tocSresultlisttodoresponse"></a>
<a id="tocsresultlisttodoresponse"></a>

```json
{
  "success": true,
  "message": "string",
  "data": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "date": "string",
      "time": "string",
      "status": "string",
      "typeId": "string",
      "typeName": "string",
      "typeIcon": "string",
      "source": "string",
      "templateId": "string",
      "repeatType": "string",
      "repeatRule": {
        "type": "string",
        "days": [
          0
        ]
      },
      "attachments": [
        {
          "attachmentId": "string",
          "type": "string",
          "url": "string",
          "previewUrl": "string",
          "fileName": "string",
          "fileSize": 0,
          "createdAt": "string"
        }
      ],
      "createdAt": "string",
      "completedAt": "string",
      "updatedAt": "string"
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|success|boolean|false|none||是否成功|
|message|string|false|none||响应消息|
|data|[[TodoResponse](#schematodoresponse)]|false|none||响应数据|

<h2 id="tocS_FileUploadResponse">FileUploadResponse</h2>

<a id="schemafileuploadresponse"></a>
<a id="schema_FileUploadResponse"></a>
<a id="tocSfileuploadresponse"></a>
<a id="tocsfileuploadresponse"></a>

```json
{
  "fileId": "string",
  "url": "string",
  "fileName": "string",
  "fileSize": 0,
  "type": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|fileId|string|false|none||文件ID（attachmentId）|
|url|string|false|none||文件访问URL|
|fileName|string|false|none||文件名|
|fileSize|integer(int64)|false|none||文件大小（字节）|
|type|string|false|none||文件类型（image/voice/file）|

<h2 id="tocS_ResultFileUploadResponse">ResultFileUploadResponse</h2>

<a id="schemaresultfileuploadresponse"></a>
<a id="schema_ResultFileUploadResponse"></a>
<a id="tocSresultfileuploadresponse"></a>
<a id="tocsresultfileuploadresponse"></a>

```json
{
  "success": true,
  "message": "string",
  "data": {
    "fileId": "string",
    "url": "string",
    "fileName": "string",
    "fileSize": 0,
    "type": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|success|boolean|false|none||是否成功|
|message|string|false|none||响应消息|
|data|[FileUploadResponse](#schemafileuploadresponse)|false|none||响应数据|

<h2 id="tocS_InputStream">InputStream</h2>

<a id="schemainputstream"></a>
<a id="schema_InputStream"></a>
<a id="tocSinputstream"></a>
<a id="tocsinputstream"></a>

```json
{}

```

### 属性

*None*

<h2 id="tocS_File">File</h2>

<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "path": "string",
  "name": "string",
  "parent": "string",
  "parentFile": {
    "path": "string",
    "name": "string",
    "parent": "string",
    "parentFile": {
      "path": "string",
      "name": "string",
      "parent": "string",
      "parentFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "absolute": true,
      "absolutePath": "string",
      "absoluteFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "canonicalPath": "string",
      "canonicalFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "directory": true,
      "file": true,
      "hidden": true,
      "lastModified": 0,
      "writable": true,
      "readable": true,
      "executable": true,
      "totalSpace": 0,
      "freeSpace": 0,
      "usableSpace": 0
    },
    "absolute": true,
    "absolutePath": "string",
    "absoluteFile": {
      "path": "string",
      "name": "string",
      "parent": "string",
      "parentFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "absolute": true,
      "absolutePath": "string",
      "absoluteFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "canonicalPath": "string",
      "canonicalFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "directory": true,
      "file": true,
      "hidden": true,
      "lastModified": 0,
      "writable": true,
      "readable": true,
      "executable": true,
      "totalSpace": 0,
      "freeSpace": 0,
      "usableSpace": 0
    },
    "canonicalPath": "string",
    "canonicalFile": {
      "path": "string",
      "name": "string",
      "parent": "string",
      "parentFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "absolute": true,
      "absolutePath": "string",
      "absoluteFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "canonicalPath": "string",
      "canonicalFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "directory": true,
      "file": true,
      "hidden": true,
      "lastModified": 0,
      "writable": true,
      "readable": true,
      "executable": true,
      "totalSpace": 0,
      "freeSpace": 0,
      "usableSpace": 0
    },
    "directory": true,
    "file": true,
    "hidden": true,
    "lastModified": 0,
    "writable": true,
    "readable": true,
    "executable": true,
    "totalSpace": 0,
    "freeSpace": 0,
    "usableSpace": 0
  },
  "absolute": true,
  "absolutePath": "string",
  "absoluteFile": {
    "path": "string",
    "name": "string",
    "parent": "string",
    "parentFile": {
      "path": "string",
      "name": "string",
      "parent": "string",
      "parentFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "absolute": true,
      "absolutePath": "string",
      "absoluteFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "canonicalPath": "string",
      "canonicalFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "directory": true,
      "file": true,
      "hidden": true,
      "lastModified": 0,
      "writable": true,
      "readable": true,
      "executable": true,
      "totalSpace": 0,
      "freeSpace": 0,
      "usableSpace": 0
    },
    "absolute": true,
    "absolutePath": "string",
    "absoluteFile": {
      "path": "string",
      "name": "string",
      "parent": "string",
      "parentFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "absolute": true,
      "absolutePath": "string",
      "absoluteFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "canonicalPath": "string",
      "canonicalFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "directory": true,
      "file": true,
      "hidden": true,
      "lastModified": 0,
      "writable": true,
      "readable": true,
      "executable": true,
      "totalSpace": 0,
      "freeSpace": 0,
      "usableSpace": 0
    },
    "canonicalPath": "string",
    "canonicalFile": {
      "path": "string",
      "name": "string",
      "parent": "string",
      "parentFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "absolute": true,
      "absolutePath": "string",
      "absoluteFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "canonicalPath": "string",
      "canonicalFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "directory": true,
      "file": true,
      "hidden": true,
      "lastModified": 0,
      "writable": true,
      "readable": true,
      "executable": true,
      "totalSpace": 0,
      "freeSpace": 0,
      "usableSpace": 0
    },
    "directory": true,
    "file": true,
    "hidden": true,
    "lastModified": 0,
    "writable": true,
    "readable": true,
    "executable": true,
    "totalSpace": 0,
    "freeSpace": 0,
    "usableSpace": 0
  },
  "canonicalPath": "string",
  "canonicalFile": {
    "path": "string",
    "name": "string",
    "parent": "string",
    "parentFile": {
      "path": "string",
      "name": "string",
      "parent": "string",
      "parentFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "absolute": true,
      "absolutePath": "string",
      "absoluteFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "canonicalPath": "string",
      "canonicalFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "directory": true,
      "file": true,
      "hidden": true,
      "lastModified": 0,
      "writable": true,
      "readable": true,
      "executable": true,
      "totalSpace": 0,
      "freeSpace": 0,
      "usableSpace": 0
    },
    "absolute": true,
    "absolutePath": "string",
    "absoluteFile": {
      "path": "string",
      "name": "string",
      "parent": "string",
      "parentFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "absolute": true,
      "absolutePath": "string",
      "absoluteFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "canonicalPath": "string",
      "canonicalFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "directory": true,
      "file": true,
      "hidden": true,
      "lastModified": 0,
      "writable": true,
      "readable": true,
      "executable": true,
      "totalSpace": 0,
      "freeSpace": 0,
      "usableSpace": 0
    },
    "canonicalPath": "string",
    "canonicalFile": {
      "path": "string",
      "name": "string",
      "parent": "string",
      "parentFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "absolute": true,
      "absolutePath": "string",
      "absoluteFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "canonicalPath": "string",
      "canonicalFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "directory": true,
      "file": true,
      "hidden": true,
      "lastModified": 0,
      "writable": true,
      "readable": true,
      "executable": true,
      "totalSpace": 0,
      "freeSpace": 0,
      "usableSpace": 0
    },
    "directory": true,
    "file": true,
    "hidden": true,
    "lastModified": 0,
    "writable": true,
    "readable": true,
    "executable": true,
    "totalSpace": 0,
    "freeSpace": 0,
    "usableSpace": 0
  },
  "directory": true,
  "file": true,
  "hidden": true,
  "lastModified": 0,
  "writable": true,
  "readable": true,
  "executable": true,
  "totalSpace": 0,
  "freeSpace": 0,
  "usableSpace": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|path|string|false|none||This abstract pathname's normalized pathname string. A normalized<br />pathname string uses the default name-separator character and does not<br />contain any duplicate or redundant separators.|
|name|string|false|none||Returns the name of the file or directory denoted by this abstract<br />pathname.  This is just the last name in the pathname's name<br />sequence.  If the pathname's name sequence is empty, then the empty<br />string is returned.|
|parent|string|false|none||Returns the pathname string of this abstract pathname's parent, or<br />{@code null} if this pathname does not name a parent directory.<br /><br /><p> The <em>parent</em> of an abstract pathname consists of the<br />pathname's prefix, if any, and each name in the pathname's name<br />sequence except for the last.  If the name sequence is empty then<br />the pathname does not name a parent directory.|
|parentFile|[File](#schemafile)|false|none||Returns the abstract pathname of this abstract pathname's parent,<br />or{@code null} if this pathname does not name a parent<br />directory.<br /><br /><p> The <em>parent</em> of an abstract pathname consists of the<br />pathname's prefix, if any, and each name in the pathname's name<br />sequence except for the last.  If the name sequence is empty then<br />the pathname does not name a parent directory.|
|absolute|boolean|false|none||Tests whether this abstract pathname is absolute.  The definition of<br />absolute pathname is system dependent.  On UNIX systems, a pathname is<br />absolute if its prefix is{@code "/"}.  On Microsoft Windows systems, a<br />pathname is absolute if its prefix is a drive specifier followed by<br />{@code "\\"}, or if its prefix is{@code "\\\\"}.|
|absolutePath|string|false|none||Returns the absolute pathname string of this abstract pathname.<br /><br /><p> If this abstract pathname is already absolute, then the pathname<br />string is simply returned as if by the{@link #getPath}<br />method.  If this abstract pathname is the empty abstract pathname then<br />the pathname string of the current user directory, which is named by the<br />system property{@code user.dir}, is returned.  Otherwise this<br />pathname is resolved in a system-dependent way.  On UNIX systems, a<br />relative pathname is made absolute by resolving it against the current<br />user directory.  On Microsoft Windows systems, a relative pathname is made absolute<br />by resolving it against the current directory of the drive named by the<br />pathname, if any; if not, it is resolved against the current user<br />directory.|
|absoluteFile|[File](#schemafile)|false|none||Returns the absolute form of this abstract pathname.  Equivalent to<br /><code>new&nbsp;File(this.{@link #getAbsolutePath})</code>.|
|canonicalPath|string|false|none||Returns the canonical pathname string of this abstract pathname.<br /><br /><p> A canonical pathname is both absolute and unique.  The precise<br />definition of canonical form is system-dependent.  This method first<br />converts this pathname to absolute form if necessary, as if by invoking the<br />{@link #getAbsolutePath} method, and then maps it to its unique form in a<br />system-dependent way.  This typically involves removing redundant names<br />such as{@code "."} and{@code ".."} from the pathname, resolving<br />symbolic links (on UNIX platforms), and converting drive letters to a<br />standard case (on Microsoft Windows platforms).<br /><br /><p> Every pathname that denotes an existing file or directory has a<br />unique canonical form.  Every pathname that denotes a nonexistent file<br />or directory also has a unique canonical form.  The canonical form of<br />the pathname of a nonexistent file or directory may be different from<br />the canonical form of the same pathname after the file or directory is<br />created.  Similarly, the canonical form of the pathname of an existing<br />file or directory may be different from the canonical form of the same<br />pathname after the file or directory is deleted.|
|canonicalFile|[File](#schemafile)|false|none||Returns the canonical form of this abstract pathname.  Equivalent to<br /><code>new&nbsp;File(this.{@link #getCanonicalPath})</code>.|
|directory|boolean|false|none||Tests whether the file denoted by this abstract pathname is a<br />directory.<br /><br /><p> Where it is required to distinguish an I/O exception from the case<br />that the file is not a directory, or where several attributes of the<br />same file are required at the same time, then the{@link<br />    * java.nio.file.Files#readAttributes(Path,Class,LinkOption[])<br />    * Files.readAttributes} method may be used.|
|file|boolean|false|none||Tests whether the file denoted by this abstract pathname is a normal<br />file.  A file is <em>normal</em> if it is not a directory and, in<br />addition, satisfies other system-dependent criteria.  Any non-directory<br />file created by a Java application is guaranteed to be a normal file.<br /><br /><p> Where it is required to distinguish an I/O exception from the case<br />that the file is not a normal file, or where several attributes of the<br />same file are required at the same time, then the{@link<br />    * java.nio.file.Files#readAttributes(Path,Class,LinkOption[])<br />    * Files.readAttributes} method may be used.|
|hidden|boolean|false|none||Tests whether the file named by this abstract pathname is a hidden<br />file.  The exact definition of <em>hidden</em> is system-dependent.  On<br />UNIX systems, a file is considered to be hidden if its name begins with<br />a period character ({@code '.'}).  On Microsoft Windows systems, a file is<br />considered to be hidden if it has been marked as such in the filesystem.|
|lastModified|integer|false|none||Sets the last-modified time of the file or directory named by this<br />abstract pathname.<br /><br /><p> All platforms support file-modification times to the nearest second,<br />but some provide more precision.  The argument will be truncated to fit<br />the supported precision.  If the operation succeeds and no intervening<br />operations on the file take place, then the next invocation of the<br />{@link #lastModified} method will return the (possibly<br />truncated){@code time} argument that was passed to this method.|
|writable|boolean|false|none||A convenience method to set the owner's write permission for this abstract<br />pathname. On some platforms it may be possible to start the Java virtual<br />machine with special privileges that allow it to modify files that<br />disallow write operations.<br /><br /><p> An invocation of this method of the form{@code file.setWritable(arg)}<br />behaves in exactly the same way as the invocation<br /><br />{@snippet lang=java :<br />    *     file.setWritable(arg, true)<br />    * }|
|readable|boolean|false|none||A convenience method to set the owner's read permission for this abstract<br />pathname. On some platforms it may be possible to start the Java virtual<br />machine with special privileges that allow it to read files that are<br />marked as unreadable.<br /><br /><p>An invocation of this method of the form{@code file.setReadable(arg)}<br />behaves in exactly the same way as the invocation<br /><br />{@snippet lang=java :<br />    *     file.setReadable(arg, true)<br />    * }|
|executable|boolean|false|none||A convenience method to set the owner's execute permission for this<br />abstract pathname. On some platforms it may be possible to start the Java<br />virtual machine with special privileges that allow it to execute files<br />that are not marked executable.<br /><br /><p>An invocation of this method of the form{@code file.setExcutable(arg)}<br />behaves in exactly the same way as the invocation<br /><br />{@snippet lang=java :<br />    *     file.setExecutable(arg, true)<br />    * }|
|totalSpace|integer(int64)|false|none||Returns the size of the partition <a href="#partName">named</a> by this<br />abstract pathname. If the total number of bytes in the partition is<br />greater than{@link Long#MAX_VALUE}, then{@code Long.MAX_VALUE} will be<br />returned.|
|freeSpace|integer(int64)|false|none||Returns the number of unallocated bytes in the partition <a<br />href="#partName">named</a> by this abstract path name.  If the<br />number of unallocated bytes in the partition is greater than<br />{@link Long#MAX_VALUE}, then{@code Long.MAX_VALUE} will be returned.<br /><br /><p> The returned number of unallocated bytes is a hint, but not<br />a guarantee, that it is possible to use most or any of these<br />bytes.  The number of unallocated bytes is most likely to be<br />accurate immediately after this call.  It is likely to be made<br />inaccurate by any external I/O operations including those made<br />on the system outside of this virtual machine.  This method<br />makes no guarantee that write operations to this file system<br />will succeed.|
|usableSpace|integer(int64)|false|none||Returns the number of bytes available to this virtual machine on the<br />partition <a href="#partName">named</a> by this abstract pathname.  If<br />the number of available bytes in the partition is greater than<br />{@link Long#MAX_VALUE}, then{@code Long.MAX_VALUE} will be returned.<br />When possible, this method checks for write permissions and other<br />operating system restrictions and will therefore usually provide a more<br />accurate estimate of how much new data can actually be written than<br />{@link #getFreeSpace}.<br /><br /><p> The returned number of available bytes is a hint, but not a<br />guarantee, that it is possible to use most or any of these bytes.  The<br />number of available bytes is most likely to be accurate immediately<br />after this call.  It is likely to be made inaccurate by any external<br />I/O operations including those made on the system outside of this<br />virtual machine.  This method makes no guarantee that write operations<br />to this file system will succeed.|

<h2 id="tocS_URI">URI</h2>

<a id="schemauri"></a>
<a id="schema_URI"></a>
<a id="tocSuri"></a>
<a id="tocsuri"></a>

```json
{
  "string": "string",
  "absolute": true,
  "opaque": true,
  "rawSchemeSpecificPart": "string",
  "rawAuthority": "string",
  "rawUserInfo": "string",
  "rawPath": "string",
  "rawQuery": "string",
  "rawFragment": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|string|string|false|none||The string form of this URI.|
|absolute|boolean|false|none||Tells whether or not this URI is absolute.<br /><br /><p> A URI is absolute if, and only if, it has a scheme component. </p>|
|opaque|boolean|false|none||Tells whether or not this URI is opaque.<br /><br /><p> A URI is opaque if, and only if, it is absolute and its<br />scheme-specific part does not begin with a slash character ('/').<br />An opaque URI has a scheme, a scheme-specific part, and possibly<br />a fragment; all other components are undefined. </p>|
|rawSchemeSpecificPart|string|false|none||Returns the raw scheme-specific part of this URI.  The scheme-specific<br />part is never undefined, though it may be empty.<br /><br /><p> The scheme-specific part of a URI only contains legal URI<br />characters. </p>|
|rawAuthority|string|false|none||Returns the raw authority component of this URI.<br /><br /><p> The authority component of a URI, if defined, only contains the<br />commercial-at character ({@code '@'}) and characters in the<br /><i>unreserved</i>, <i>punct</i>, <i>escaped</i>, and <i>other</i><br />categories.  If the authority is server-based then it is further<br />constrained to have valid user-information, host, and port<br />components. </p>|
|rawUserInfo|string|false|none||Returns the raw user-information component of this URI.<br /><br /><p> The user-information component of a URI, if defined, only contains<br />characters in the <i>unreserved</i>, <i>punct</i>, <i>escaped</i>, and<br /><i>other</i> categories. </p>|
|rawPath|string|false|none||Returns the raw path component of this URI.<br /><br /><p> The path component of a URI, if defined, only contains the slash<br />character ({@code '/'}), the commercial-at character ({@code '@'}),<br />and characters in the <i>unreserved</i>, <i>punct</i>, <i>escaped</i>,<br />and <i>other</i> categories. </p>|
|rawQuery|string|false|none||Returns the raw query component of this URI.<br /><br /><p> The query component of a URI, if defined, only contains legal URI<br />characters. </p>|
|rawFragment|string|false|none||Returns the raw fragment component of this URI.<br /><br /><p> The fragment component of a URI, if defined, only contains legal URI<br />characters. </p>|

<h2 id="tocS_ResponseEntityResource">ResponseEntityResource</h2>

<a id="schemaresponseentityresource"></a>
<a id="schema_ResponseEntityResource"></a>
<a id="tocSresponseentityresource"></a>
<a id="tocsresponseentityresource"></a>

```json
{
  "inputStream": {},
  "readable": true,
  "open": true,
  "file": {
    "path": "string",
    "name": "string",
    "parent": "string",
    "parentFile": {
      "path": "string",
      "name": "string",
      "parent": "string",
      "parentFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "absolute": true,
      "absolutePath": "string",
      "absoluteFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "canonicalPath": "string",
      "canonicalFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "directory": true,
      "file": true,
      "hidden": true,
      "lastModified": 0,
      "writable": true,
      "readable": true,
      "executable": true,
      "totalSpace": 0,
      "freeSpace": 0,
      "usableSpace": 0
    },
    "absolute": true,
    "absolutePath": "string",
    "absoluteFile": {
      "path": "string",
      "name": "string",
      "parent": "string",
      "parentFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "absolute": true,
      "absolutePath": "string",
      "absoluteFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "canonicalPath": "string",
      "canonicalFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "directory": true,
      "file": true,
      "hidden": true,
      "lastModified": 0,
      "writable": true,
      "readable": true,
      "executable": true,
      "totalSpace": 0,
      "freeSpace": 0,
      "usableSpace": 0
    },
    "canonicalPath": "string",
    "canonicalFile": {
      "path": "string",
      "name": "string",
      "parent": "string",
      "parentFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "absolute": true,
      "absolutePath": "string",
      "absoluteFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "canonicalPath": "string",
      "canonicalFile": {
        "path": "string",
        "name": "string",
        "parent": "string",
        "parentFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "absolute": true,
        "absolutePath": "string",
        "absoluteFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "canonicalPath": "string",
        "canonicalFile": {
          "path": null,
          "name": null,
          "parent": null,
          "parentFile": null,
          "absolute": null,
          "absolutePath": null,
          "absoluteFile": null,
          "canonicalPath": null,
          "canonicalFile": null,
          "directory": null,
          "file": null,
          "hidden": null,
          "lastModified": null,
          "writable": null,
          "readable": null,
          "executable": null,
          "totalSpace": null,
          "freeSpace": null,
          "usableSpace": null
        },
        "directory": true,
        "file": true,
        "hidden": true,
        "lastModified": 0,
        "writable": true,
        "readable": true,
        "executable": true,
        "totalSpace": 0,
        "freeSpace": 0,
        "usableSpace": 0
      },
      "directory": true,
      "file": true,
      "hidden": true,
      "lastModified": 0,
      "writable": true,
      "readable": true,
      "executable": true,
      "totalSpace": 0,
      "freeSpace": 0,
      "usableSpace": 0
    },
    "directory": true,
    "file": true,
    "hidden": true,
    "lastModified": 0,
    "writable": true,
    "readable": true,
    "executable": true,
    "totalSpace": 0,
    "freeSpace": 0,
    "usableSpace": 0
  },
  "uRL": "string",
  "uRI": {
    "string": "string",
    "absolute": true,
    "opaque": true,
    "rawSchemeSpecificPart": "string",
    "rawAuthority": "string",
    "rawUserInfo": "string",
    "rawPath": "string",
    "rawQuery": "string",
    "rawFragment": "string"
  },
  "contentAsByteArray": [
    0
  ],
  "filename": "string",
  "description": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|inputStream|[InputStream](#schemainputstream)|false|none||java.io.InputStream|
|readable|boolean|false|none||none|
|open|boolean|false|none||none|
|file|[File](#schemafile)|false|none||java.io.File|
|uRL|string|false|none||none|
|uRI|[URI](#schemauri)|false|none||java.net.URI|
|contentAsByteArray|[integer]|false|none||none|
|filename|string¦null|false|none||none|
|description|string|false|none||none|

<h2 id="tocS_MonthStatisticsResponse">MonthStatisticsResponse</h2>

<a id="schemamonthstatisticsresponse"></a>
<a id="schema_MonthStatisticsResponse"></a>
<a id="tocSmonthstatisticsresponse"></a>
<a id="tocsmonthstatisticsresponse"></a>

```json
{
  "month": "string",
  "totalCount": 0,
  "completedCount": 0,
  "completionRate": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|month|string|false|none||月份（格式：yyyy-MM）|
|totalCount|integer|false|none||总任务数|
|completedCount|integer|false|none||已完成数量|
|completionRate|number|false|none||完成率|

<h2 id="tocS_ResultMonthStatisticsResponse">ResultMonthStatisticsResponse</h2>

<a id="schemaresultmonthstatisticsresponse"></a>
<a id="schema_ResultMonthStatisticsResponse"></a>
<a id="tocSresultmonthstatisticsresponse"></a>
<a id="tocsresultmonthstatisticsresponse"></a>

```json
{
  "success": true,
  "message": "string",
  "data": {
    "month": "string",
    "totalCount": 0,
    "completedCount": 0,
    "completionRate": 0
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|success|boolean|false|none||是否成功|
|message|string|false|none||响应消息|
|data|[MonthStatisticsResponse](#schemamonthstatisticsresponse)|false|none||响应数据|

<h2 id="tocS_TypeStatisticsResponse">TypeStatisticsResponse</h2>

<a id="schematypestatisticsresponse"></a>
<a id="schema_TypeStatisticsResponse"></a>
<a id="tocStypestatisticsresponse"></a>
<a id="tocstypestatisticsresponse"></a>

```json
{
  "month": "string",
  "typeId": "string",
  "typeName": "string",
  "typeIcon": "string",
  "completedCount": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|month|string|false|none||月份（格式：yyyy-MM）|
|typeId|string|false|none||类型ID|
|typeName|string|false|none||类型名称|
|typeIcon|string|false|none||类型图标|
|completedCount|integer|false|none||完成次数|

<h2 id="tocS_ResultListTypeStatisticsResponse">ResultListTypeStatisticsResponse</h2>

<a id="schemaresultlisttypestatisticsresponse"></a>
<a id="schema_ResultListTypeStatisticsResponse"></a>
<a id="tocSresultlisttypestatisticsresponse"></a>
<a id="tocsresultlisttypestatisticsresponse"></a>

```json
{
  "success": true,
  "message": "string",
  "data": [
    {
      "month": "string",
      "typeId": "string",
      "typeName": "string",
      "typeIcon": "string",
      "completedCount": 0
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|success|boolean|false|none||是否成功|
|message|string|false|none||响应消息|
|data|[[TypeStatisticsResponse](#schematypestatisticsresponse)]|false|none||响应数据|

<h2 id="tocS_ResultTodoResponse">ResultTodoResponse</h2>

<a id="schemaresulttodoresponse"></a>
<a id="schema_ResultTodoResponse"></a>
<a id="tocSresulttodoresponse"></a>
<a id="tocsresulttodoresponse"></a>

```json
{
  "success": true,
  "message": "string",
  "data": {
    "id": "string",
    "title": "string",
    "description": "string",
    "date": "string",
    "time": "string",
    "status": "string",
    "typeId": "string",
    "typeName": "string",
    "typeIcon": "string",
    "source": "string",
    "templateId": "string",
    "repeatType": "string",
    "repeatRule": {
      "type": "string",
      "days": [
        0
      ]
    },
    "attachments": [
      {
        "attachmentId": "string",
        "type": "string",
        "url": "string",
        "previewUrl": "string",
        "fileName": "string",
        "fileSize": 0,
        "createdAt": "string"
      }
    ],
    "createdAt": "string",
    "completedAt": "string",
    "updatedAt": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|success|boolean|false|none||是否成功|
|message|string|false|none||响应消息|
|data|[TodoResponse](#schematodoresponse)|false|none||响应数据|

<h2 id="tocS_TodoCreateRequest">TodoCreateRequest</h2>

<a id="schematodocreaterequest"></a>
<a id="schema_TodoCreateRequest"></a>
<a id="tocStodocreaterequest"></a>
<a id="tocstodocreaterequest"></a>

```json
{
  "title": "string",
  "description": "string",
  "date": "string",
  "time": "string",
  "typeId": "string",
  "repeatType": "string",
  "repeatRule": {
    "type": "string",
    "days": [
      0
    ]
  },
  "attachmentIds": [
    "string"
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|title|string|true|none||Todo 内容|
|description|string|false|none||备注/备忘|
|date|string|true|none||任务所属日期|
|time|string|false|none||时间（可选）|
|typeId|string|false|none||Todo 类型ID|
|repeatType|string|false|none||重复类型（none/daily/weekly/monthly）|
|repeatRule|[RepeatRule](#schemarepeatrule)|false|none||重复规则|
|attachmentIds|[string]|false|none||附件ID列表|

<h2 id="tocS_TodoUpdateRequest">TodoUpdateRequest</h2>

<a id="schematodoupdaterequest"></a>
<a id="schema_TodoUpdateRequest"></a>
<a id="tocStodoupdaterequest"></a>
<a id="tocstodoupdaterequest"></a>

```json
{
  "title": "string",
  "description": "string",
  "date": "string",
  "time": "string",
  "typeId": "string",
  "repeatType": "string",
  "repeatRule": {
    "type": "string",
    "days": [
      0
    ]
  },
  "attachmentIds": [
    "string"
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|title|string|false|none||Todo 内容|
|description|string|false|none||备注/备忘|
|date|string|false|none||任务所属日期|
|time|string|false|none||时间（可选）|
|typeId|string|false|none||Todo 类型ID|
|repeatType|string|false|none||重复类型（none/daily/weekly/monthly）|
|repeatRule|[RepeatRule](#schemarepeatrule)|false|none||重复规则|
|attachmentIds|[string]|false|none||附件ID列表|

<h2 id="tocS_ResultString">ResultString</h2>

<a id="schemaresultstring"></a>
<a id="schema_ResultString"></a>
<a id="tocSresultstring"></a>
<a id="tocsresultstring"></a>

```json
{
  "success": true,
  "message": "string",
  "data": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|success|boolean|false|none||是否成功|
|message|string|false|none||响应消息|
|data|string|false|none||响应数据|

<h2 id="tocS_TemplateTodoResponse">TemplateTodoResponse</h2>

<a id="schematemplatetodoresponse"></a>
<a id="schema_TemplateTodoResponse"></a>
<a id="tocStemplatetodoresponse"></a>
<a id="tocstemplatetodoresponse"></a>

```json
{
  "id": "string",
  "title": "string",
  "typeId": "string",
  "typeName": "string",
  "typeIcon": "string",
  "sortOrder": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||模板Todo ID|
|title|string|false|none||Todo 内容|
|typeId|string|false|none||Todo 类型ID|
|typeName|string|false|none||类型名称|
|typeIcon|string|false|none||类型图标|
|sortOrder|integer|false|none||排序|

<h2 id="tocS_TemplateResponse">TemplateResponse</h2>

<a id="schematemplateresponse"></a>
<a id="schema_TemplateResponse"></a>
<a id="tocStemplateresponse"></a>
<a id="tocstemplateresponse"></a>

```json
{
  "templateId": "string",
  "templateName": "string",
  "description": "string",
  "todos": [
    {
      "id": "string",
      "title": "string",
      "typeId": "string",
      "typeName": "string",
      "typeIcon": "string",
      "sortOrder": 0
    }
  ],
  "createdAt": "string",
  "updatedAt": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|templateId|string|false|none||模板ID|
|templateName|string|false|none||模板名称|
|description|string|false|none||模板说明|
|todos|[[TemplateTodoResponse](#schematemplatetodoresponse)]|false|none||模板项列表|
|createdAt|string|false|none||创建时间|
|updatedAt|string|false|none||更新时间|

<h2 id="tocS_ResultTemplateResponse">ResultTemplateResponse</h2>

<a id="schemaresulttemplateresponse"></a>
<a id="schema_ResultTemplateResponse"></a>
<a id="tocSresulttemplateresponse"></a>
<a id="tocsresulttemplateresponse"></a>

```json
{
  "success": true,
  "message": "string",
  "data": {
    "templateId": "string",
    "templateName": "string",
    "description": "string",
    "todos": [
      {
        "id": "string",
        "title": "string",
        "typeId": "string",
        "typeName": "string",
        "typeIcon": "string",
        "sortOrder": 0
      }
    ],
    "createdAt": "string",
    "updatedAt": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|success|boolean|false|none||是否成功|
|message|string|false|none||响应消息|
|data|[TemplateResponse](#schematemplateresponse)|false|none||响应数据|

<h2 id="tocS_TemplateCreateRequest">TemplateCreateRequest</h2>

<a id="schematemplatecreaterequest"></a>
<a id="schema_TemplateCreateRequest"></a>
<a id="tocStemplatecreaterequest"></a>
<a id="tocstemplatecreaterequest"></a>

```json
{
  "templateName": "string",
  "description": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|templateName|string|true|none||模板名称|
|description|string|false|none||模板说明|

<h2 id="tocS_ResultListTemplateResponse">ResultListTemplateResponse</h2>

<a id="schemaresultlisttemplateresponse"></a>
<a id="schema_ResultListTemplateResponse"></a>
<a id="tocSresultlisttemplateresponse"></a>
<a id="tocsresultlisttemplateresponse"></a>

```json
{
  "success": true,
  "message": "string",
  "data": [
    {
      "templateId": "string",
      "templateName": "string",
      "description": "string",
      "todos": [
        {
          "id": "string",
          "title": "string",
          "typeId": "string",
          "typeName": "string",
          "typeIcon": "string",
          "sortOrder": 0
        }
      ],
      "createdAt": "string",
      "updatedAt": "string"
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|success|boolean|false|none||是否成功|
|message|string|false|none||响应消息|
|data|[[TemplateResponse](#schematemplateresponse)]|false|none||响应数据|

<h2 id="tocS_ResultTemplateTodoResponse">ResultTemplateTodoResponse</h2>

<a id="schemaresulttemplatetodoresponse"></a>
<a id="schema_ResultTemplateTodoResponse"></a>
<a id="tocSresulttemplatetodoresponse"></a>
<a id="tocsresulttemplatetodoresponse"></a>

```json
{
  "success": true,
  "message": "string",
  "data": {
    "id": "string",
    "title": "string",
    "typeId": "string",
    "typeName": "string",
    "typeIcon": "string",
    "sortOrder": 0
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|success|boolean|false|none||是否成功|
|message|string|false|none||响应消息|
|data|[TemplateTodoResponse](#schematemplatetodoresponse)|false|none||响应数据|

<h2 id="tocS_TodoTypeResponse">TodoTypeResponse</h2>

<a id="schematodotyperesponse"></a>
<a id="schema_TodoTypeResponse"></a>
<a id="tocStodotyperesponse"></a>
<a id="tocstodotyperesponse"></a>

```json
{
  "typeId": "string",
  "typeName": "string",
  "icon": "string",
  "color": "string",
  "createdAt": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|typeId|string|false|none||类型ID|
|typeName|string|false|none||类型名称|
|icon|string|false|none||图标（emoji字符）|
|color|string|false|none||颜色（可选）|
|createdAt|string|false|none||创建时间|

<h2 id="tocS_ResultTodoTypeResponse">ResultTodoTypeResponse</h2>

<a id="schemaresulttodotyperesponse"></a>
<a id="schema_ResultTodoTypeResponse"></a>
<a id="tocSresulttodotyperesponse"></a>
<a id="tocsresulttodotyperesponse"></a>

```json
{
  "success": true,
  "message": "string",
  "data": {
    "typeId": "string",
    "typeName": "string",
    "icon": "string",
    "color": "string",
    "createdAt": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|success|boolean|false|none||是否成功|
|message|string|false|none||响应消息|
|data|[TodoTypeResponse](#schematodotyperesponse)|false|none||响应数据|

<h2 id="tocS_TodoTypeRequest">TodoTypeRequest</h2>

<a id="schematodotyperequest"></a>
<a id="schema_TodoTypeRequest"></a>
<a id="tocStodotyperequest"></a>
<a id="tocstodotyperequest"></a>

```json
{
  "typeName": "string",
  "icon": "string",
  "color": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|typeName|string|true|none||类型名称|
|icon|string|false|none||图标（emoji字符）|
|color|string|false|none||颜色（可选）|

<h2 id="tocS_ResultListTodoTypeResponse">ResultListTodoTypeResponse</h2>

<a id="schemaresultlisttodotyperesponse"></a>
<a id="schema_ResultListTodoTypeResponse"></a>
<a id="tocSresultlisttodotyperesponse"></a>
<a id="tocsresultlisttodotyperesponse"></a>

```json
{
  "success": true,
  "message": "string",
  "data": [
    {
      "typeId": "string",
      "typeName": "string",
      "icon": "string",
      "color": "string",
      "createdAt": "string"
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|success|boolean|false|none||是否成功|
|message|string|false|none||响应消息|
|data|[[TodoTypeResponse](#schematodotyperesponse)]|false|none||响应数据|

