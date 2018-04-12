const animationModule = require("tns-core-modules/ui/animation");
const enumsModule = require("ui/enums");

var currentPage;

function setEditable(args) {
  var un = currentPage.getViewById("fieldEmail");
  var p = currentPage.getViewById("fieldPassword");
  un.editable = true;
  p.editable = true;
  //clear the ontap handler
  un.off("tap");
  p.off("tap");
  //set focus on field tapped
  args.object.focus();
}
exports.setEditable = setEditable;

exports.onLoaded = function(args) {
  currentPage = args.object;

  var fieldEmail = currentPage.getViewById("fieldEmail");
  var fieldPassword = currentPage.getViewById("fieldPassword");
  var buttonLogin = currentPage.getViewById("buttonLogin");
  var logoGopher = currentPage.getViewById("logoGopher");
  
  var totalAnimTime = 1500; //all animation times are in milliseconds


  var animations = [
    {
      target: logoGopher,
      opacity: 1,
      translate: {
        x: 0,
        y: 0
      },
      duration: totalAnimTime,
      delay: 500,
      curve: enumsModule.AnimationCurve.easeInOut
    },
    {
      target: fieldEmail,
      opacity: 1,
      translate: {
        x: 0,
        y: 0
      },
      duration: totalAnimTime,
      delay: 550,
      curve: enumsModule.AnimationCurve.easeInOut
    },
    {
      target: fieldPassword,
      opacity: 1,
      translate: {
        x: 0,
        y: 0
      },
      duration: totalAnimTime,
      delay: 550,
      curve: enumsModule.AnimationCurve.easeInOut
    },
    {
      target: buttonLogin,
      opacity: 1,
      translate: {
        x: 0,
        y: 0
      },
      duration: totalAnimTime,
      delay: 600,
      curve: enumsModule.AnimationCurve.easeInOut
    }
  ];
  introAnim = new animationModule.Animation(animations);
  introAnim
    .play()
    .then(() => {
      console.log("Animations finished");      
    })
    .catch(e => {
      console.log("Caught ERROR during animation:");
      console.log(e.message);      
    });

    
};
