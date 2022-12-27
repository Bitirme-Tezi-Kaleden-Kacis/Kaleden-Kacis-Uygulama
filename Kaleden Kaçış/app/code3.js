gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDRestartObjects1= [];
gdjs.Game_32OverCode.GDRestartObjects2= [];
gdjs.Game_32OverCode.GDRestartObjects3= [];
gdjs.Game_32OverCode.GDMenuButtonObjects1= [];
gdjs.Game_32OverCode.GDMenuButtonObjects2= [];
gdjs.Game_32OverCode.GDMenuButtonObjects3= [];
gdjs.Game_32OverCode.GDNewSpriteObjects1= [];
gdjs.Game_32OverCode.GDNewSpriteObjects2= [];
gdjs.Game_32OverCode.GDNewSpriteObjects3= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_0 = {val:false};
gdjs.Game_32OverCode.conditionTrue_1 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_1 = {val:false};


gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.Game_32OverCode.GDRestartObjects1});
gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition0IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12092748);
}
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Game_32OverCode.GDRestartObjects1, gdjs.Game_32OverCode.GDRestartObjects2);

{for(var i = 0, len = gdjs.Game_32OverCode.GDRestartObjects2.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDRestartObjects2[i].getBehavior("Tween").addObjectScaleTween("Hover", 0.6, 0.3, "bouncePast", 100, false, false);
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition1IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12092652);
}
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Game_32OverCode.GDRestartObjects1, gdjs.Game_32OverCode.GDRestartObjects2);

{for(var i = 0, len = gdjs.Game_32OverCode.GDRestartObjects2.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDRestartObjects2[i].getBehavior("Tween").addObjectScaleTween("Press", 0.2, 0.2, "easeOutQuad", 50, false, false);
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition1IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12094260);
}
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDRestartObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDRestartObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 0.3, 0.3, "bouncePast", 100, false, false);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Oyun Alanı", false);
}}

}


};gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.Game_32OverCode.GDRestartObjects1});
gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDMenuButtonObjects1Objects = Hashtable.newFrom({"MenuButton": gdjs.Game_32OverCode.GDMenuButtonObjects1});
gdjs.Game_32OverCode.eventsList1 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition0IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12096964);
}
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Game_32OverCode.GDMenuButtonObjects1, gdjs.Game_32OverCode.GDMenuButtonObjects2);

{for(var i = 0, len = gdjs.Game_32OverCode.GDMenuButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDMenuButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("Hover", 0.3, 0.3, "bouncePast", 100, false, false);
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition1IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12097612);
}
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Game_32OverCode.GDMenuButtonObjects1, gdjs.Game_32OverCode.GDMenuButtonObjects2);

{for(var i = 0, len = gdjs.Game_32OverCode.GDMenuButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDMenuButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("Press", 0.2, 0.2, "easeOutQuad", 50, false, false);
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition1IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12098388);
}
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDMenuButtonObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDMenuButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDMenuButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 0.3, 0.3, "bouncePast", 100, false, false);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Açılış Ekranı", false);
}}

}


};gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDMenuButtonObjects1Objects = Hashtable.newFrom({"MenuButton": gdjs.Game_32OverCode.GDMenuButtonObjects1});
gdjs.Game_32OverCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.Game_32OverCode.GDMenuButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.Game_32OverCode.GDRestartObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDRestartObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2.5);
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDMenuButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDMenuButtonObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 17);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.Game_32OverCode.GDRestartObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDRestartObjects1Objects, runtimeScene, true, false);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_32OverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.Game_32OverCode.GDRestartObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDRestartObjects1Objects, runtimeScene, true, true);
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition1IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12095492);
}
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDRestartObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDRestartObjects1[i].getBehavior("Tween").addObjectScaleTween("Default", 0.2, 0.2, "bouncePast", 100, false, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.Game_32OverCode.GDMenuButtonObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDMenuButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_32OverCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.Game_32OverCode.GDMenuButtonObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDMenuButtonObjects1Objects, runtimeScene, true, true);
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition1IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12099868);
}
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDMenuButtonObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDMenuButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDMenuButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Default", 0.2, 0.2, "bouncePast", 100, false, false);
}
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDRestartObjects1.length = 0;
gdjs.Game_32OverCode.GDRestartObjects2.length = 0;
gdjs.Game_32OverCode.GDRestartObjects3.length = 0;
gdjs.Game_32OverCode.GDMenuButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDMenuButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDMenuButtonObjects3.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects3.length = 0;

gdjs.Game_32OverCode.eventsList2(runtimeScene);

return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
