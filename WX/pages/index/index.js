Page({
  data: {
    array: ['紫菘', '韵苑', '沁苑'],
    index:0,
    msg:1234
  } 
,
  pickerChange:function(e){
    var pickerdata=e.detail.value;
    this.setData({
      index: e.detail.value
    });
    console.log(pickerdata);
  }
,
  onreset:function(e){
    this.setData({
      index:0
    })
  }
,
  Formsubmit:function(e){
    var formdata=e.detail.value;
    console.log(e.detail.value);
    if (! /^U20\d{7}$/.test(formdata["idcard"])) {
      wx.showModal({
        title: "阿里马斯呐",
        content: "学号有问题哒",
        showCancel: false,
        confirmText: "好啊"
      });
      return;
    }

    if(! /^\d{11}$/.test(formdata["tel"])){
        wx.showModal({
            title: '阿里马斯呐',
            content: '请检查您的联系电话是否正确填写！',
            showCancel:false,
            confirmText:" 吼"
        });
        return;
    }

    wx.showModal({
        title: ' 提交成功',
        content: '请等待',
        showCancel:false,
        confirmText:"!"
    })

}
  }
)
