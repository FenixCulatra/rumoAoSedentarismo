gdjs.Cr_233ditosCode = {};
gdjs.Cr_233ditosCode.GDPlayerObjects1= [];
gdjs.Cr_233ditosCode.GDPlayerObjects2= [];
gdjs.Cr_233ditosCode.GDparedezinhaObjects1= [];
gdjs.Cr_233ditosCode.GDparedezinhaObjects2= [];
gdjs.Cr_233ditosCode.GDPortazinhaObjects1= [];
gdjs.Cr_233ditosCode.GDPortazinhaObjects2= [];
gdjs.Cr_233ditosCode.GDrealplayerObjects1= [];
gdjs.Cr_233ditosCode.GDrealplayerObjects2= [];
gdjs.Cr_233ditosCode.GDoutra_95paredezinhaObjects1= [];
gdjs.Cr_233ditosCode.GDoutra_95paredezinhaObjects2= [];
gdjs.Cr_233ditosCode.GDWASDObjects1= [];
gdjs.Cr_233ditosCode.GDWASDObjects2= [];
gdjs.Cr_233ditosCode.GDspawnpointObjects1= [];
gdjs.Cr_233ditosCode.GDspawnpointObjects2= [];
gdjs.Cr_233ditosCode.GDNewSpriteObjects1= [];
gdjs.Cr_233ditosCode.GDNewSpriteObjects2= [];
gdjs.Cr_233ditosCode.GDvoltarObjects1= [];
gdjs.Cr_233ditosCode.GDvoltarObjects2= [];
gdjs.Cr_233ditosCode.GDoutra_95outra_95paredezinhaObjects1= [];
gdjs.Cr_233ditosCode.GDoutra_95outra_95paredezinhaObjects2= [];
gdjs.Cr_233ditosCode.GDbackgroundObjects1= [];
gdjs.Cr_233ditosCode.GDbackgroundObjects2= [];
gdjs.Cr_233ditosCode.GDcreditosObjects1= [];
gdjs.Cr_233ditosCode.GDcreditosObjects2= [];
gdjs.Cr_233ditosCode.GDqmfezissoObjects1= [];
gdjs.Cr_233ditosCode.GDqmfezissoObjects2= [];
gdjs.Cr_233ditosCode.GDNewTextObjects1= [];
gdjs.Cr_233ditosCode.GDNewTextObjects2= [];
gdjs.Cr_233ditosCode.GDparabensObjects1= [];
gdjs.Cr_233ditosCode.GDparabensObjects2= [];
gdjs.Cr_233ditosCode.GDaeeeeObjects1= [];
gdjs.Cr_233ditosCode.GDaeeeeObjects2= [];


gdjs.Cr_233ditosCode.mapOfGDgdjs_46Cr_95233ditosCode_46GDvoltarObjects1Objects = Hashtable.newFrom({"voltar": gdjs.Cr_233ditosCode.GDvoltarObjects1});
gdjs.Cr_233ditosCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("voltar"), gdjs.Cr_233ditosCode.GDvoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cr_233ditosCode.mapOfGDgdjs_46Cr_95233ditosCode_46GDvoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena de Título", false);
}}

}


};

gdjs.Cr_233ditosCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cr_233ditosCode.GDPlayerObjects1.length = 0;
gdjs.Cr_233ditosCode.GDPlayerObjects2.length = 0;
gdjs.Cr_233ditosCode.GDparedezinhaObjects1.length = 0;
gdjs.Cr_233ditosCode.GDparedezinhaObjects2.length = 0;
gdjs.Cr_233ditosCode.GDPortazinhaObjects1.length = 0;
gdjs.Cr_233ditosCode.GDPortazinhaObjects2.length = 0;
gdjs.Cr_233ditosCode.GDrealplayerObjects1.length = 0;
gdjs.Cr_233ditosCode.GDrealplayerObjects2.length = 0;
gdjs.Cr_233ditosCode.GDoutra_95paredezinhaObjects1.length = 0;
gdjs.Cr_233ditosCode.GDoutra_95paredezinhaObjects2.length = 0;
gdjs.Cr_233ditosCode.GDWASDObjects1.length = 0;
gdjs.Cr_233ditosCode.GDWASDObjects2.length = 0;
gdjs.Cr_233ditosCode.GDspawnpointObjects1.length = 0;
gdjs.Cr_233ditosCode.GDspawnpointObjects2.length = 0;
gdjs.Cr_233ditosCode.GDNewSpriteObjects1.length = 0;
gdjs.Cr_233ditosCode.GDNewSpriteObjects2.length = 0;
gdjs.Cr_233ditosCode.GDvoltarObjects1.length = 0;
gdjs.Cr_233ditosCode.GDvoltarObjects2.length = 0;
gdjs.Cr_233ditosCode.GDoutra_95outra_95paredezinhaObjects1.length = 0;
gdjs.Cr_233ditosCode.GDoutra_95outra_95paredezinhaObjects2.length = 0;
gdjs.Cr_233ditosCode.GDbackgroundObjects1.length = 0;
gdjs.Cr_233ditosCode.GDbackgroundObjects2.length = 0;
gdjs.Cr_233ditosCode.GDcreditosObjects1.length = 0;
gdjs.Cr_233ditosCode.GDcreditosObjects2.length = 0;
gdjs.Cr_233ditosCode.GDqmfezissoObjects1.length = 0;
gdjs.Cr_233ditosCode.GDqmfezissoObjects2.length = 0;
gdjs.Cr_233ditosCode.GDNewTextObjects1.length = 0;
gdjs.Cr_233ditosCode.GDNewTextObjects2.length = 0;
gdjs.Cr_233ditosCode.GDparabensObjects1.length = 0;
gdjs.Cr_233ditosCode.GDparabensObjects2.length = 0;
gdjs.Cr_233ditosCode.GDaeeeeObjects1.length = 0;
gdjs.Cr_233ditosCode.GDaeeeeObjects2.length = 0;

gdjs.Cr_233ditosCode.eventsList0(runtimeScene);

return;

}

gdjs['Cr_233ditosCode'] = gdjs.Cr_233ditosCode;
