const _0x3d78a9=_0x329d;(function(_0x452752,_0x1d1320){const _0x2822c1=_0x329d,_0xfcb965=_0x452752();while(!![]){try{const _0xcbbd6b=parseInt(_0x2822c1(0xce))/0x1+-parseInt(_0x2822c1(0xd7))/0x2*(parseInt(_0x2822c1(0xcb))/0x3)+parseInt(_0x2822c1(0xdd))/0x4+-parseInt(_0x2822c1(0xd8))/0x5*(-parseInt(_0x2822c1(0xe0))/0x6)+parseInt(_0x2822c1(0xd2))/0x7*(-parseInt(_0x2822c1(0xd0))/0x8)+-parseInt(_0x2822c1(0xdb))/0x9*(-parseInt(_0x2822c1(0xc8))/0xa)+parseInt(_0x2822c1(0xe1))/0xb*(parseInt(_0x2822c1(0xe2))/0xc);if(_0xcbbd6b===_0x1d1320)break;else _0xfcb965['push'](_0xfcb965['shift']());}catch(_0x123a86){_0xfcb965['push'](_0xfcb965['shift']());}}}(_0x3821,0xb95f4));function _0x3821(){const _0x35597f=['Convert\x20an\x20image\x20to\x20a\x20sticker','4532061CixMDg','sendMessage','../command','1227152idHtJu','几乇ㄒ卄爪丨几卂','392KydxvM','Please\x20reply\x20to\x20an\x20image\x20or\x20video\x20to\x20convert\x20it\x20to\x20a\x20sticker.','357tfxirG','message','卩卂几丂丨ㄥㄩ','utility','stickerInput','2SBIHiS','5YZLZwX','Error:\x20','wa-sticker-formatter','1283994eqXLqm','stick','2072600MQclrM','imageMessage','Failed\x20to\x20download\x20the\x20media.\x20Try\x20again!','282738hmCCps','11tBkoJk','2336556RMjoqX','error','FULL','20ZRFdSN','../lib/msg.js'];_0x3821=function(){return _0x35597f;};return _0x3821();}const {cmd,commands}=require(_0x3d78a9(0xcd)),{Sticker,StickerTypes}=require(_0x3d78a9(0xda)),{downloadMediaMessage}=require(_0x3d78a9(0xc9));function _0x329d(_0x31a0eb,_0x17ecfd){const _0x382109=_0x3821();return _0x329d=function(_0x329d7e,_0x509e03){_0x329d7e=_0x329d7e-0xc6;let _0x21fe9b=_0x382109[_0x329d7e];return _0x21fe9b;},_0x329d(_0x31a0eb,_0x17ecfd);}cmd({'pattern':'sticker','alias':['s',_0x3d78a9(0xdc)],'react':'🥱','desc':_0x3d78a9(0xca),'category':_0x3d78a9(0xd5),'filename':__filename},async(_0x599491,_0x30a720,_0x1a63c4,{from:_0x2e966b,quoted:_0x530213,body:_0x46bb5e,isCmd:_0x2b0e37,command:_0x3b9721,args:_0x54f7fb,q:_0x451d99,isGroup:_0x2efa47,sender:_0x2ac609,senderNumber:_0x140015,botNumber2:_0x51dca9,botNumber:_0x51456c,pushname:_0x559175,isMe:_0x16fc84,isOwner:_0x553f6b,groupMetadata:_0x5ac9af,groupName:_0x4a5c02,participants:_0x9ffd36,groupAdmins:_0x1419d2,isBotAdmins:_0x2bf5cc,isAdmins:_0xf3794d,reply:_0x58c676})=>{const _0x46c50d=_0x3d78a9;try{if(!_0x530213||!(_0x530213[_0x46c50d(0xde)]||_0x530213['videoMessage']))return _0x58c676(_0x46c50d(0xd1));const _0x552971=await downloadMediaMessage(_0x530213,_0x46c50d(0xd6));if(!_0x552971)return _0x58c676(_0x46c50d(0xdf));const _0x1db263=new Sticker(_0x552971,{'pack':_0x46c50d(0xd4),'author':_0x46c50d(0xcf),'type':StickerTypes[_0x46c50d(0xc7)],'quality':0x32}),_0x31d719=await _0x1db263['toBuffer']();await _0x599491[_0x46c50d(0xcc)](_0x2e966b,{'sticker':_0x31d719},{'quoted':_0x30a720});}catch(_0x3c677f){console[_0x46c50d(0xc6)](_0x3c677f),_0x58c676(_0x46c50d(0xd9)+(_0x3c677f[_0x46c50d(0xd3)]||_0x3c677f));}});
