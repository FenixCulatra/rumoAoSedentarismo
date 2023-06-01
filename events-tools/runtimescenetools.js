var gdjs;(function(r){let i;(function(o){let c;(function(s){s.sceneJustBegins=function(e){return e.getScene().getTimeManager().isFirstFrame()},s.sceneJustResumed=function(e){return e.getScene().sceneJustResumed()},s.getSceneName=function(e){return e.getScene().getName()},s.setBackgroundColor=function(e,t){const n=t.split(";");n.length<3||e.getScene().setBackgroundColor(parseInt(n[0]),parseInt(n[1]),parseInt(n[2]))},s.getElapsedTimeInSeconds=function(e){return e.getScene().getTimeManager().getElapsedTime()/1e3},s.setTimeScale=function(e,t){return e.getScene().getTimeManager().setTimeScale(t)},s.getTimeScale=function(e){return e.getScene().getTimeManager().getTimeScale()},s.timerElapsedTime=function(e,t,n){const a=e.getScene().getTimeManager();return a.hasTimer(n)?a.getTimer(n).getTime()/1e3>=t:(a.addTimer(n),!1)},s.timerPaused=function(e,t){const n=e.getScene().getTimeManager();return n.hasTimer(t)?n.getTimer(t).isPaused():!1},s.resetTimer=function(e,t){const n=e.getScene().getTimeManager();n.hasTimer(t)?n.getTimer(t).reset():n.addTimer(t)},s.pauseTimer=function(e,t){const n=e.getScene().getTimeManager();n.hasTimer(t)||n.addTimer(t),n.getTimer(t).setPaused(!0)},s.unpauseTimer=function(e,t){const n=e.getScene().getTimeManager();return n.hasTimer(t)||n.addTimer(t),n.getTimer(t).setPaused(!1)},s.removeTimer=function(e,t){e.getScene().getTimeManager().removeTimer(t)};class u extends r.AsyncTask{constructor(t){super();this.timeElapsedOnScene=0;this.duration=t}update(t){return this.timeElapsedOnScene+=t.getScene().getTimeManager().getElapsedTime(),this.timeElapsedOnScene>=this.duration}}s.WaitTask=u,s.wait=e=>new u(e*1e3),s.getTimerElapsedTimeInSeconds=function(e,t){const n=e.getScene().getTimeManager();return n.hasTimer(t)?n.getTimer(t).getTime()/1e3:0},s.getTimerElapsedTimeInSecondsOrNaN=function(e,t){const n=e.getScene().getTimeManager();return n.hasTimer(t)?n.getTimer(t).getTime()/1e3:Number.NaN},s.getTimeFromStartInSeconds=function(e){return e.getScene().getTimeManager().getTimeFromStart()/1e3},s.getTime=function(e,t){if(t==="timestamp")return Date.now();const n=new Date;if(t==="hour")return n.getHours();if(t==="min")return n.getMinutes();if(t==="sec")return n.getSeconds();if(t==="mday")return n.getDate();if(t==="mon")return n.getMonth();if(t==="year")return n.getFullYear()-1900;if(t==="wday")return n.getDay();if(t==="yday"){const a=new Date(n.getFullYear(),0,0),g=n.getTime()-a.getTime(),m=1e3*60*60*24;return Math.floor(g/m)}return 0},s.replaceScene=function(e,t,n){!e.getGame().getSceneData(t)||e.getScene().requestChange(n?r.SceneChangeRequest.CLEAR_SCENES:r.SceneChangeRequest.REPLACE_SCENE,t)},s.pushScene=function(e,t){!e.getGame().getSceneData(t)||e.getScene().requestChange(r.SceneChangeRequest.PUSH_SCENE,t)},s.popScene=function(e){e.getScene().requestChange(r.SceneChangeRequest.POP_SCENE)},s.stopGame=function(e){e.getScene().requestChange(r.SceneChangeRequest.STOP_GAME)},s.createObjectsFromExternalLayout=function(e,t,n,a){const g=e.getGame().getExternalLayoutData(t);g!==null&&e.getScene().createObjectsFrom(g.instances,n,a,!1)},s.hasGameJustResumed=e=>e.getGame().hasJustResumed(),s.doesSceneExist=(e,t)=>e.getGame().hasScene(t)})(c=o.runtimeScene||(o.runtimeScene={}))})(i=r.evtTools||(r.evtTools={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=runtimescenetools.js.map
