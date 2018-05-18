/**
 * Created by cheese on 2017. 2. 9..
 */

const
  request = require('request'),
  cheerio = require('cheerio'),
  async = require('async'),
  message = require('../kakaobot/message'),
  Bot = {};

//const getApiai = require('../service/getApiai');
//const cache = require('memory-cache');

Bot.choseMenu = (req, content, callback) => {

  switch (content) {
    /* top */
    case "안녕~":
      callback(null, message.baseType("안녕하세요! '당신의 기분은'입니다. 오늘 하루에 있었던 일에 대해서 말해주세요^^"));
      break;

    case "관리자":
      //callback(null, message.baseType("당신입니다."));
      callback(null, message.photoTypeWithButtons("제 사진입니다", "https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/30729878_1159227237553073_8206804884698734600_n.jpg?_nc_cat=0&_nc_eui2=AeE-agDy7x09z1kt6rcYBTLx7GbmcIMsvH5AD6zBdcZK_g2spsiN4W74fEWTyorQajyZXajRhxAbzzrCHOkPNtMtz-QJZSylt_bFi6hVG9qObg&oh=ca0c83f4b05ab91bfdbf5fbe3e680184&oe=5B91D4C4", "관리자입니다^^", "https://www.facebook.com/profile.php?id=100003974223037", message.buttonsPhoto));
      break;

    /* Photo */
    case "너무 잘생겼어요^^":
      callback(null, message.baseTypeWithButtons("맞습니다.ㅎㅎ", message.buttonsPhoto));
      break;
      
    case "홈으로":
      callback(null, message.baseType("홈 입니다."));
      break;
      
    default:
      callback(null, message.baseType("알 수 없는 명령입니다."));
      /*
      getApiai(content, function (data) {
        callback(null, message.baseTypeText(data));
      });
      */
      break;
  }
};

module.exports = Bot;