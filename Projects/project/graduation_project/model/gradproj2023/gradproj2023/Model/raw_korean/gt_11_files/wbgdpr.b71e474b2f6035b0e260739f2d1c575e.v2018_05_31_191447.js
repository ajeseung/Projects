
var consentEnum={'0:':{name:'REQUIRED',access_level:['REQUIRED']},'0,1:':{name:'FUNCTIONAL',access_level:['REQUIRED','FUNCTIONAL']},'0,1,2:':{name:'ADVERTISING',access_level:['REQUIRED','FUNCTIONAL','ADVERTISING']},};var gdprCountries=['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IS','IE','IT','LV','LI','LT','LU','MT','NL','NO','PL','PT','RO','SK','SI','ES','SE','CH','GB','AU','KR','CN','HK','JP','IN','MY','PH','SG','TW'];(function(exports){function getConsentCookie(cookieName){var cookieValue;if(navigator.cookieEnabled){m=document.cookie.match(cookieName+'=([^;]*)');cookieValue=m&&(m[1]||false);}
return cookieValue;}
function hasConsent(consentRequestLevel){if(gdprCountries.indexOf(VIEWER_COUNTRY)>-1){var userConsentLevel=getConsentCookie('notice_gdpr_prefs');if(userConsentLevel===null&&consentRequestLevel=='REQUIRED'){console.log("[wbgdpr] no consent cookie exists - allow only REQUIRED");return true;}else if(userConsentLevel===null){console.log("[wbgdpr] no consent cookie exists & asking for higher consent than REQUIRED");return false;}
var consentToken=consentEnum[userConsentLevel].access_level;console.log("[wbgdpr] consent req: "+consentRequestLevel+", consents allowed: "+consentToken);return consentToken.indexOf(consentRequestLevel)>-1?true:false;}else{console.log("[wbgdpr] country not in scope");return true;}}
exports.hasConsent=hasConsent;}((this.wbgdpr=this.wbgdpr||{})));var enableRequired=wbgdpr.hasConsent('REQUIRED');var enableAds=wbgdpr.hasConsent('ADVERTISING');var enableFunctional=wbgdpr.hasConsent('FUNCTIONAL');