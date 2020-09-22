// cookie配置
exports.keys = "dfbgffdsafddgxsdfrxdfd";
exports.multipart = {
    mode: "file",
};
exports.security = {
    csrf: false,
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
