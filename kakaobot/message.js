/**
 * Created by cheese on 2017. 2. 10..
 */

/** menu tree
  Text
  Photo
    |- Sub text
    |- Go up
*/

let message = {};

//버튼 이름 정리
message.mainButtons = [ "소개",
                    "시작하기"];

message.buttonsPhoto = [ ];

message.startButtons = [ "기뻐요!",
                          "슬퍼요 ㅠ",
                           "처음으로"];


//버튼 기능 구현부
message.buttonsType = () => {
    return {
        type: 'buttons',
        buttons: message.mainButtons
    }
};

message.buttonsTypeWithButtons = (text, buttons) => {
    return {
        message: {
            text: text,
        },
        keyboard: {
            type: 'buttons',
            buttons: buttons
        }
    }
};

message.buttonsTypeText = (text) => {
    return {
        message: {
            text: text,
        },
        keyboard: {
            type: 'text',
        }
    }
};

message.baseType = (text) => {
    return {
        message: {
            text: text,
        },
        keyboard: {
            type: 'buttons',
            buttons: message.mainButtons
        }
    }
};

message.baseTypeWithButtons = (text, buttons) => {
    return {
        message: {
            text: text,
        },
        keyboard: {
            type: 'buttons',
            buttons: buttons
        }
    }
};


message.baseTypeText = (text) => {
    return {
        message: {
            text: text,
        },
        keyboard: {
            type: 'text',
        }
    }
};


message.photoType = (text, url_photo, label, url_button) => {
    return {
      message: {
        text: text,
        photo: {
          url: url_photo,
          width: 640,
          height: 480
        },
        message_button: {
          label: label,
          url: url_button,
        }
      },
      keyboard: {
        type: 'buttons',
        buttons: message.mainButtons
      }
    }
};

message.photoTypeWithButtons = (text, url_photo, label, url_button, buttons) => {
    return {
      message: {
        text: text,
        photo: {
          url: url_photo,
          width: 640,
          height: 480
        },
        message_button: {
          label: label,
          url: url_button,
        }
      },
      keyboard: {
        type: 'buttons',
        buttons: buttons
      }
    }
};

message.messageButtonType = (text, label, url_button) => {
    return {
      message: {
        text: text,
        message_button: {
          label: label,
          url: url_button,
        }
      },
      keyboard: {
        type: 'buttons',
        buttons: message.mainButtons
      }
    }
};

module.exports = message;