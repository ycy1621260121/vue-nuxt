let router = require("express")();
let axios = require("axios");
router.get("/api/getRed", async (ctx, next) => {
  await axios({
    url: "https://bj.meituan.com/ptapi/getHotFilms?ci=1&limit=30",
    method: "get",
  })
    .then(res => {
     // let { status, statuseText, data } = res;
     // console.log(res.data.data)
        var body = {
          code: 0,
          success: true,
          message: '请求成功',
          data:res.data.data
        };
        next.json(body);
    })
    .catch(err =>  next.json({code:'404',message:'请求失败'}));
});
// router.get("/api/channels/platform", async (ctx, next) => {
//   await axios.post(`http://106.13.69.59:8098/intellectualmine?date=`+Date.now(),{
//       'page':ctx.query.page,
//       'pageSize':ctx.query.pageSize
//     })
//     .then(res => {
//       let { status, statuseText, data } = res;
//       if (status == 200) {
//         var body = {
//           code: 0,
//           success: true,
//           message: statuseText,
//           data:[...data.list]
//         };
//         next.json(body);
//       }
//     })
//     .catch(err => console.log(err, "???????"));
//   // console.log(ctx,'转发客户端的请求')
// });
// router.get("/api/platforms", async (ctx, next) => {
//   await axios({
//     url: "https://api.data.caasdata.com/platforms",
//     method: "get",
//     headers: {
//       Origin: "https://www.caasdata.com"
//     }
//   })
//     .then(res => {
//       let { status, statuseText, data } = res;
//       if (status == 200) {
//         var body = {
//           code: 0,
//           success: true,
//           message: statuseText,
//           ...data.data
//         };
//         next.json(body);
//       }
//     })
//     .catch(err => console.log(err, "???????"));
//   // console.log(ctx,'转发客户端的请求')
// });
// router.get("/api/index", async (ctx, next) => {
//   await axios({
//     url: "https://api.data.caasdata.com/index",
//     method: "get",
//     headers: {
//       Origin: "https://www.caasdata.com"
//     }
//   })
//     .then(res => {
//       let { status, statuseText, data } = res;
//       console.log(data,'2222222222')
//       if (status == 200) {
//         var body = {
//           code: 0,
//           success: true,
//           message: statuseText,
//           data:{...data.data.articles}
//         };
//         next.json(body);
//       }
//     })
//     .catch(err => console.log(err, "???????"));
//   // console.log(ctx,'转发客户端的请求')
// });
module.exports = router;
