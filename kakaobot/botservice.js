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
    case "소개":
      callback(null, message.baseType("안녕하세요! '당신의 기분은'입니다. 오늘 하루에 있었던 일에 대해서 말해주세요^^"));
      break;
      
    // 시작메뉴
    case "시작하기":
      callback(null, message.buttonsTypeWithButtons("오늘 하루는 어떠셨나요? 당신의 이야기를 들려주세요ㅎㅎ.", message.startButtons));
      break;

    /* startMenu */
    case "기뻐요!":
      callback(null, message.buttonsTypeWithButtons("저두 오늘 기분이 좋답니다^^ 어떤 일이 있으셨나요?", message.startButtons));
      break;
      
    case "슬퍼요 ㅠ":
      callback(null, message.buttonsTypeWithButtons("저런... 오늘 슬픈 일이 있으셨어요?", message.startButtons));
      break;
      
    case "처음으로":
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