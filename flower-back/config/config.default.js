// cookie配置
exports.keys = "dfbgffdsafddgxsdfrxdfd";
//加上后post请求才能成功,文件上传才能成功 1
exports.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    }
  };
exports.multipart = {
    mode: "file",
};


exports.mysql = {
    client: {
        host: "49.234.124.126",
        port: "3306",
        user: "root",
        password: "Pp123!@#",
        database: "flower",
    },
};

// 跨域配置
exports.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
};

