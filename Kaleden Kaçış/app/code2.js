gdjs.Hakk_305ndaCode = {};
gdjs.Hakk_305ndaCode.GDBackButtonObjects1= [];
gdjs.Hakk_305ndaCode.GDBackButtonObjects2= [];
gdjs.Hakk_305ndaCode.GDBackButtonObjects3= [];
gdjs.Hakk_305ndaCode.GDhakkindaObjects1= [];
gdjs.Hakk_305ndaCode.GDhakkindaObjects2= [];
gdjs.Hakk_305ndaCode.GDhakkindaObjects3= [];

gdjs.Hakk_305ndaCode.conditionTrue_0 = {val:false};
gdjs.Hakk_305ndaCode.condition0IsTrue_0 = {val:false};
gdjs.Hakk_305ndaCode.condition1IsTrue_0 = {val:false};
gdjs.Hakk_305ndaCode.condition2IsTrue_0 = {val:false};
gdjs.Hakk_305ndaCode.conditionTrue_1 = {val:false};
gdjs.Hakk_305ndaCode.condition0IsTrue_1 = {val:false};
gdjs.Hakk_305ndaCode.condition1IsTrue_1 = {val:false};
gdjs.Hakk_305ndaCode.condition2IsTrue_1 = {val:false};


gdjs.Hakk_305ndaCode.mapOfGDgdjs_46Hakk_95305ndaCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.Hakk_305ndaCode.GDBackButtonObjects1});
gdjs.Hakk_305ndaCode.eventsList0 = function(runtimeScene) {

{


gdjs.Hakk_305ndaCode.condition0IsTrue_0.val = false;
{
{gdjs.Hakk_305ndaCode.conditionTrue_1 = gdjs.Hakk_305ndaCode.condition0IsTrue_0;
gdjs.Hakk_305ndaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12082900);
}
}if (gdjs.Hakk_305ndaCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Hakk_305ndaCode.GDBackButtonObjects1, gdjs.Hakk_305ndaCode.GDBackButtonObjects2);

{for(var i = 0, len = gdjs.Hakk_305ndaCode.GDBackButtonObjects2.length ;i < len;++i) {
    gdjs.Hakk_305ndaCode.GDBackButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("Hover", 0.6, 0.6, "bouncePast", 100, false, false);
}
}}

}


{


gdjs.Hakk_305ndaCode.condition0IsTrue_0.val = false;
gdjs.Hakk_305ndaCode.condition1IsTrue_0.val = false;
{
gdjs.Hakk_305ndaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Hakk_305ndaCode.condition0IsTrue_0.val ) {
{
{gdjs.Hakk_305ndaCode.conditionTrue_1 = gdjs.Hakk_305ndaCode.condition1IsTrue_0;
gdjs.Hakk_305ndaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12082804);
}
}}
if (gdjs.Hakk_305ndaCode.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Hakk_305ndaCode.GDBackButtonObjects1, gdjs.Hakk_305ndaCode.GDBackButtonObjects2);

{for(var i = 0, len = gdjs.Hakk_305ndaCode.GDBackButtonObjects2.length ;i < len;++i) {
    gdjs.Hakk_305ndaCode.GDBackButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("Press", 0.5, 0.5, "easeOutQuad", 50, false, false);
}
}}

}


{


gdjs.Hakk_305ndaCode.condition0IsTrue_0.val = false;
gdjs.Hakk_305ndaCode.condition1IsTrue_0.val = false;
{
gdjs.Hakk_305ndaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Hakk_305ndaCode.condition0IsTrue_0.val ) {
{
{gdjs.Hakk_305ndaCode.conditionTrue_1 = gdjs.Hakk_305ndaCode.condition1IsTrue_0;
gdjs.Hakk_305ndaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12084412);
}
}}
if (gdjs.Hakk_305ndaCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Hakk_305ndaCode.GDBackButtonObjects1 */
{for(var i = 0, len = gdjs.Hakk_305ndaCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.Hakk_305ndaCode.GDBackButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 0.6, 0.6, "bouncePast", 100, false, false);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Açılış Ekranı", false);
}}

}


};gdjs.Hakk_305ndaCode.mapOfGDgdjs_46Hakk_95305ndaCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.Hakk_305ndaCode.GDBackButtonObjects1});
gdjs.Hakk_305ndaCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.Hakk_305ndaCode.GDBackButtonObjects1);
{for(var i = 0, len = gdjs.Hakk_305ndaCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.Hakk_305ndaCode.GDBackButtonObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 20);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.Hakk_305ndaCode.GDBackButtonObjects1);

gdjs.Hakk_305ndaCode.condition0IsTrue_0.val = false;
{
gdjs.Hakk_305ndaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Hakk_305ndaCode.mapOfGDgdjs_46Hakk_95305ndaCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Hakk_305ndaCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Hakk_305ndaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.Hakk_305ndaCode.GDBackButtonObjects1);

gdjs.Hakk_305ndaCode.condition0IsTrue_0.val = false;
gdjs.Hakk_305ndaCode.condition1IsTrue_0.val = false;
{
gdjs.Hakk_305ndaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Hakk_305ndaCode.mapOfGDgdjs_46Hakk_95305ndaCode_46GDBackButtonObjects1Objects, runtimeScene, true, true);
}if ( gdjs.Hakk_305ndaCode.condition0IsTrue_0.val ) {
{
{gdjs.Hakk_305ndaCode.conditionTrue_1 = gdjs.Hakk_305ndaCode.condition1IsTrue_0;
gdjs.Hakk_305ndaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12085652);
}
}}
if (gdjs.Hakk_305ndaCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Hakk_305ndaCode.GDBackButtonObjects1 */
{for(var i = 0, len = gdjs.Hakk_305ndaCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.Hakk_305ndaCode.GDBackButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Default", 0.5, 0.5, "bouncePast", 100, false, false);
}
}}

}


};

gdjs.Hakk_305ndaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Hakk_305ndaCode.GDBackButtonObjects1.length = 0;
gdjs.Hakk_305ndaCode.GDBackButtonObjects2.length = 0;
gdjs.Hakk_305ndaCode.GDBackButtonObjects3.length = 0;
gdjs.Hakk_305ndaCode.GDhakkindaObjects1.length = 0;
gdjs.Hakk_305ndaCode.GDhakkindaObjects2.length = 0;
gdjs.Hakk_305ndaCode.GDhakkindaObjects3.length = 0;

gdjs.Hakk_305ndaCode.eventsList1(runtimeScene);

return;

}

gdjs['Hakk_305ndaCode'] = gdjs.Hakk_305ndaCode;
