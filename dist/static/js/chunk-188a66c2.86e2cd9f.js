(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-188a66c2"],{"09d9":function(e,t,o){},3250:function(e,t,o){"use strict";var r=o("09d9"),a=o.n(r);a.a},4927:function(e,t,o){},"680f":function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-upload",{staticClass:"image-uploader",attrs:{action:"https://httpbin.org/pos/","show-file-list":!1,"on-success":e.handleimageSuccess,"before-upload":e.beforeimageUpload}},[e.imageUrl?o("img",{staticClass:"image",attrs:{src:e.imageUrl}}):o("i",{staticClass:"el-icon-plus image-uploader-icon"})])},a=[],s={name:"SingleImageUpload",props:{value:{type:String,default:""}},data:function(){return{}},computed:{imageUrl:function(){return this.value}},methods:{handleimageSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw)},beforeimageUpload:function(e){var t="image/jpeg"===e.type,o=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),o||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&o}}},l=s,i=(o("3250"),o("2877")),n=Object(i["a"])(l,r,a,!1,null,null,null);t["a"]=n.exports},b03f:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main-content"},[o("div",{staticClass:"store-container"},[o("el-menu",{staticStyle:{"margin-bottom":"20px"},attrs:{"default-active":"1",mode:"horizontal",router:""}},[o("el-menu-item",{attrs:{index:"1"}},[e._v("编辑门店信息")])],1),e._v(" "),o("el-row",[o("el-form",{ref:"form",attrs:{model:e.storeForm,"label-width":"80px",size:"small"}},[o("el-form-item",{attrs:{label:"门店名称"}},[o("el-input",{model:{value:e.storeForm.name,callback:function(t){e.$set(e.storeForm,"name",t)},expression:"storeForm.name"}})],1),e._v(" "),o("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{label:"门店头像",prop:"image_uri"}},[o("Upload",{model:{value:e.storeForm.image_uri,callback:function(t){e.$set(e.storeForm,"image_uri",t)},expression:"storeForm.image_uri"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"联系方式"}},[o("el-input",{model:{value:e.storeForm.tele,callback:function(t){e.$set(e.storeForm,"tele",t)},expression:"storeForm.tele"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"微信号"}},[o("el-input",{model:{value:e.storeForm.wx,callback:function(t){e.$set(e.storeForm,"wx",t)},expression:"storeForm.wx"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"门店定位"}},[o("el-input",{model:{value:e.storeForm.location,callback:function(t){e.$set(e.storeForm,"location",t)},expression:"storeForm.location"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"补充地址"}},[o("el-input",{model:{value:e.storeForm.address,callback:function(t){e.$set(e.storeForm,"address",t)},expression:"storeForm.address"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")]),e._v(" "),o("el-button",[e._v("取消")])],1)],1)],1)],1),e._v(" "),o("div",{staticClass:"secondary-sidebar"})])},a=[],s=o("680f"),l={name:"",image_uri:"",tele:"",wx:"",location:"",address:"",id:void 0},i={name:"editStore",components:{Upload:s["a"]},data:function(){return{storeForm:Object.assign({},l)}},methods:{onSubmit:function(){console.log("submit!")}}},n=i,m=(o("d1c1"),o("2877")),c=Object(m["a"])(n,r,a,!1,null,"2b333a0b",null);t["default"]=c.exports},d1c1:function(e,t,o){"use strict";var r=o("4927"),a=o.n(r);a.a}}]);