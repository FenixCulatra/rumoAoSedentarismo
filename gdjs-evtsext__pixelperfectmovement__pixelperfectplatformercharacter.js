
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter || {};

/**
 * Behavior generated from Pixel perfect platformer character
 */
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter = class PixelPerfectPlatformerCharacter extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PlatformerCharacter = behaviorData.PlatformerCharacter !== undefined ? behaviorData.PlatformerCharacter : "";
    this._behaviorData.PixelSize = behaviorData.PixelSize !== undefined ? behaviorData.PixelSize : Number("1") || 0;
    this._behaviorData.OffsetX = behaviorData.OffsetX !== undefined ? behaviorData.OffsetX : Number("0") || 0;
    this._behaviorData.OffsetY = behaviorData.OffsetY !== undefined ? behaviorData.OffsetY : Number("0") || 0;
    this._behaviorData.TargetX = Number("0") || 0;
    this._behaviorData.TargetDirectionX = Number("0") || 0;
    this._behaviorData.TargetY = Number("0") || 0;
    this._behaviorData.TargetDirectionY = Number("0") || 0;
    this._behaviorData.PreviousSpeedX = Number("") || 0;
    this._behaviorData.IsDecelerating = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.PlatformerCharacter !== newBehaviorData.PlatformerCharacter)
      this._behaviorData.PlatformerCharacter = newBehaviorData.PlatformerCharacter;
    if (oldBehaviorData.PixelSize !== newBehaviorData.PixelSize)
      this._behaviorData.PixelSize = newBehaviorData.PixelSize;
    if (oldBehaviorData.OffsetX !== newBehaviorData.OffsetX)
      this._behaviorData.OffsetX = newBehaviorData.OffsetX;
    if (oldBehaviorData.OffsetY !== newBehaviorData.OffsetY)
      this._behaviorData.OffsetY = newBehaviorData.OffsetY;
    if (oldBehaviorData.TargetX !== newBehaviorData.TargetX)
      this._behaviorData.TargetX = newBehaviorData.TargetX;
    if (oldBehaviorData.TargetDirectionX !== newBehaviorData.TargetDirectionX)
      this._behaviorData.TargetDirectionX = newBehaviorData.TargetDirectionX;
    if (oldBehaviorData.TargetY !== newBehaviorData.TargetY)
      this._behaviorData.TargetY = newBehaviorData.TargetY;
    if (oldBehaviorData.TargetDirectionY !== newBehaviorData.TargetDirectionY)
      this._behaviorData.TargetDirectionY = newBehaviorData.TargetDirectionY;
    if (oldBehaviorData.PreviousSpeedX !== newBehaviorData.PreviousSpeedX)
      this._behaviorData.PreviousSpeedX = newBehaviorData.PreviousSpeedX;
    if (oldBehaviorData.IsDecelerating !== newBehaviorData.IsDecelerating)
      this._behaviorData.IsDecelerating = newBehaviorData.IsDecelerating;

    return true;
  }

  // Properties:
  
  _getPlatformerCharacter() {
    return this._behaviorData.PlatformerCharacter !== undefined ? this._behaviorData.PlatformerCharacter : "";
  }
  _setPlatformerCharacter(newValue) {
    this._behaviorData.PlatformerCharacter = newValue;
  }
  _getPixelSize() {
    return this._behaviorData.PixelSize !== undefined ? this._behaviorData.PixelSize : Number("1") || 0;
  }
  _setPixelSize(newValue) {
    this._behaviorData.PixelSize = newValue;
  }
  _getOffsetX() {
    return this._behaviorData.OffsetX !== undefined ? this._behaviorData.OffsetX : Number("0") || 0;
  }
  _setOffsetX(newValue) {
    this._behaviorData.OffsetX = newValue;
  }
  _getOffsetY() {
    return this._behaviorData.OffsetY !== undefined ? this._behaviorData.OffsetY : Number("0") || 0;
  }
  _setOffsetY(newValue) {
    this._behaviorData.OffsetY = newValue;
  }
  _getTargetX() {
    return this._behaviorData.TargetX !== undefined ? this._behaviorData.TargetX : Number("0") || 0;
  }
  _setTargetX(newValue) {
    this._behaviorData.TargetX = newValue;
  }
  _getTargetDirectionX() {
    return this._behaviorData.TargetDirectionX !== undefined ? this._behaviorData.TargetDirectionX : Number("0") || 0;
  }
  _setTargetDirectionX(newValue) {
    this._behaviorData.TargetDirectionX = newValue;
  }
  _getTargetY() {
    return this._behaviorData.TargetY !== undefined ? this._behaviorData.TargetY : Number("0") || 0;
  }
  _setTargetY(newValue) {
    this._behaviorData.TargetY = newValue;
  }
  _getTargetDirectionY() {
    return this._behaviorData.TargetDirectionY !== undefined ? this._behaviorData.TargetDirectionY : Number("0") || 0;
  }
  _setTargetDirectionY(newValue) {
    this._behaviorData.TargetDirectionY = newValue;
  }
  _getPreviousSpeedX() {
    return this._behaviorData.PreviousSpeedX !== undefined ? this._behaviorData.PreviousSpeedX : Number("") || 0;
  }
  _setPreviousSpeedX(newValue) {
    this._behaviorData.PreviousSpeedX = newValue;
  }
  _getIsDecelerating() {
    return this._behaviorData.IsDecelerating !== undefined ? this._behaviorData.IsDecelerating : false;
  }
  _setIsDecelerating(newValue) {
    this._behaviorData.IsDecelerating = newValue;
  }
  _toggleIsDecelerating() {
    this._setIsDecelerating(!this._getIsDecelerating());
  }
}

/**
 * Shared data generated from Pixel perfect platformer character
 */
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.SharedData = class PixelPerfectPlatformerCharacterSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PixelPerfectMovement_PixelPerfectPlatformerCharacterSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PixelPerfectMovement_PixelPerfectPlatformerCharacterSharedData = new gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.SharedData(
      initialData
    );
  }
  return instanceContainer._PixelPerfectMovement_PixelPerfectPlatformerCharacterSharedData;
}

// Methods:
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2_1final = [];

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getCurrentSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetX((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX()) + (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize()) * Math.ceil(((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i].getX()) + gdjs.evtsExt__PixelPerfectMovement__BrakingDistance.func(runtimeScene, (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getCurrentSpeed()), (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getDeceleration()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX())) / (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize())));
}
}{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetDirectionX(1);
}
}
{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getCurrentSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetX((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX()) + (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize()) * Math.floor(((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX()) - gdjs.evtsExt__PixelPerfectMovement__BrakingDistance.func(runtimeScene, (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getCurrentSpeed()), (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getDeceleration()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX())) / (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize())));
}
}{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetDirectionX(-(1));
}
}
{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(10401444);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX() < (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetDirectionX() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).setCurrentSpeed(Math.min((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getCurrentSpeed()) + (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getAcceleration()), Math.min((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getMaxSpeed()), gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.func(runtimeScene, (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetX()) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX()), (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getDeceleration()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX() > (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetDirectionX() == -(1) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).setCurrentSpeed(Math.max((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getCurrentSpeed()) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getAcceleration()), Math.max(-((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getMaxSpeed())), gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.func(runtimeScene, (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetX()) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX()), (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getDeceleration()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}}

}


{

/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2);

{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX() >= (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetX()) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetDirectionX() == 1 ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2);

{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX() <= (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetX()) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetDirectionX() == -(1) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[i].setX((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX()) + (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize()) * Math.round(((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX()) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX())) / (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize())));
}
}{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetDirectionX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).setCurrentSpeed(0);
}
}
{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsDecelerating() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs((( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getCurrentSpeed()) - (( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousSpeedX())) < (( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getCurrentSpeed()) * 0.01 + (( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getDeceleration()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Up")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetY((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY()) + (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize()) * Math.ceil(((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY()) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY())) / (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize())));
}
}{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetDirectionY(1);
}
}
{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Down")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetY((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY()) + (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize()) * Math.floor(((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY()) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY())) / (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize())));
}
}{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetDirectionY(-(1));
}
}
{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY() < (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetY()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetDirectionY() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].setY(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY() + ((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getMaxSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY() > (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetY()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetDirectionY() == -(1) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].setY(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY() - ((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getMaxSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3);

{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i].getY() >= (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetY()) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetDirectionY() == 1 ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3);

{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i].getY() <= (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetY()) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetDirectionY() == -(1) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2_1final, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].setY((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY()) + (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize()) * Math.round(((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY()) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY())) / (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize())));
}
}{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetDirectionY(0);
}
}}

}


{



}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Down")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(10400476);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Up")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(10432604);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Up")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isUsingControl("Down")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isOnLadder() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList12(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPreEventsContext.eventsList13(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsDecelerating(false);
}
}}

}


{

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getCurrentSpeed() == 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2);
{isConditionTrue_1 = (Math.abs((( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getCurrentSpeed())) == Math.abs((( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousSpeedX())) - (( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getDeceleration()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsDecelerating(true);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousSpeedX((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getCurrentSpeed()));
}
}}

}


};

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("PixelPerfectMovement::PixelPerfectPlatformerCharacter", gdjs.evtsExt__PixelPerfectMovement__PixelPerfectPlatformerCharacter.PixelPerfectPlatformerCharacter);
