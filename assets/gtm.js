// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: "21",

      macros: [{ function: "__v", vtp_name: "gtm.elementUrl", vtp_dataLayerVersion: 1 }, { function: "__e" }, { function: "__v", vtp_name: "gtm.triggers", vtp_dataLayerVersion: 2, vtp_setDefaultValue: true, vtp_defaultValue: "" }, { function: "__gas", vtp_cookieDomain: "auto", vtp_doubleClick: false, vtp_setTrackerName: false, vtp_useDebugVersion: false, vtp_useHashAutoLink: false, vtp_decorateFormsAutoLink: false, vtp_enableLinkId: false, vtp_enableEcommerce: false, vtp_trackingId: "UA-112202032-3", vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableGA4Schema: false }, { function: "__hid" }, { function: "__v", vtp_name: "gtm.videoTitle", vtp_dataLayerVersion: 1 }, { function: "__v", vtp_name: "gtm.videoStatus", vtp_dataLayerVersion: 1 }, { function: "__v", vtp_name: "gtm.videoPercent", vtp_dataLayerVersion: 1 }, { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 }, { function: "__u", vtp_component: "PATH", vtp_enableMultiQueryKeys: false, vtp_enableIgnoreEmptyQueryParam: false }, { function: "__aev", vtp_varType: "TEXT" }, { function: "__v", vtp_name: "gtm.elementClasses", vtp_dataLayerVersion: 1 }, { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 }, { function: "__aev", vtp_varType: "TEXT" }, { function: "__smm", vtp_setDefaultValue: false, vtp_input: ["macro", 6], vtp_map: ["list", ["map", "key", "start", "value", "재생 시작"], ["map", "key", "complete", "value", "재생 완료"], ["map", "key", "pause", "value", ["template", "일시중지 - ", ["macro", 7], "%"]], ["map", "key", "seek", "value", ["template", "검색 - ", ["macro", 7], "%"]], ["map", "key", "buffering", "value", ["template", "버퍼링 - ", ["macro", 7], "%"]], ["map", "key", "progress", "value", ["template", "진행- ", ["macro", 7], "%"]]] }, { function: "__u", vtp_component: "URL", vtp_enableMultiQueryKeys: false, vtp_enableIgnoreEmptyQueryParam: false }, { function: "__u", vtp_component: "HOST", vtp_enableMultiQueryKeys: false, vtp_enableIgnoreEmptyQueryParam: false }, { function: "__f", vtp_component: "URL" }, { function: "__e" }, { function: "__v", vtp_name: "gtm.elementTarget", vtp_dataLayerVersion: 1 }, { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 }, { function: "__v", vtp_name: "gtm.elementClasses", vtp_dataLayerVersion: 1 }, { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 }, { function: "__v", vtp_name: "gtm.elementTarget", vtp_dataLayerVersion: 1 }, { function: "__v", vtp_name: "gtm.elementUrl", vtp_dataLayerVersion: 1 }, { function: "__ctv" }, { function: "__r" }, { function: "__cid" }, { function: "__v", vtp_name: "gtm.videoProvider", vtp_dataLayerVersion: 1 }, { function: "__v", vtp_name: "gtm.videoUrl", vtp_dataLayerVersion: 1 }, { function: "__v", vtp_name: "gtm.videoDuration", vtp_dataLayerVersion: 1 }, { function: "__v", vtp_name: "gtm.videoVisible", vtp_dataLayerVersion: 1 }, { function: "__v", vtp_name: "gtm.videoCurrentTime", vtp_dataLayerVersion: 1 }, { function: "__v", vtp_name: "gtm.scrollThreshold", vtp_dataLayerVersion: 1 }, { function: "__v", vtp_name: "gtm.scrollDirection", vtp_dataLayerVersion: 1 }],
      tags: [
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "다운로드", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: "가이드북", vtp_eventLabel: "경인점", vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 4 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "다운로드", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: "가이드북", vtp_eventLabel: "영남점", vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 7 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_overrideGaSettings: false, vtp_trackType: "TRACK_PAGEVIEW", vtp_gaSettings: ["macro", 3], vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_enableGA4Schema: false, tag_id: 8 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "클릭", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: ["template", "온라인 사전접수 | ", ["macro", 4]], vtp_eventLabel: "온라인 사전접수", vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 10 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "클릭", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: ["template", "실시간 배송조회 | ", ["macro", 4]], vtp_eventLabel: "실시간 배송조회", vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 12 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "유튜브 재생", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: ["macro", 5], vtp_eventLabel: ["template", ["macro", 6], " – ", ["macro", 7], "%"], vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 14 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "클릭", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: ["template", "상품 팝업 | ", ["macro", 9]], vtp_eventLabel: ["macro", 10], vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 21 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "클릭", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: ["template", "탭 메뉴 | 메인 | ", ["macro", 9]], vtp_eventLabel: ["macro", 10], vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 23 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "다운로드", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: ["macro", 10], vtp_eventLabel: ["template", "엑셀 다운로드 | ", ["macro", 9]], vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 28 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "클릭", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: ["template", "현대백화점 TV | ", ["macro", 4]], vtp_eventLabel: "현대백화점 TV", vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 30 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "클릭", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: ["template", "특별한 차이 | 메인 배너 | ", ["macro", 9]], vtp_eventLabel: ["macro", 10], vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 34 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "클릭", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: ["template", "선물 컨시어지 | 메인 배너 | ", ["macro", 9]], vtp_eventLabel: ["macro", 10], vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 35 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "클릭", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: "구매하기", vtp_eventLabel: ["macro", 10], vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 38 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "다운로드", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: "가이드북", vtp_eventLabel: "download_가이드북", vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 40 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "다운로드", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: "저널북", vtp_eventLabel: "download_저널북", vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 42 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "클릭", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: "메인 배너", vtp_eventLabel: "얼리버드 배너", vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 44 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "클릭", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: "메인 배너", vtp_eventLabel: "본행사 배너", vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 46 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "클릭", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: "검색", vtp_eventLabel: ["template", "검색 | ", ["macro", 10]], vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 48 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "클릭", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: "검색 상세", vtp_eventLabel: ["template", "상세검색 | ", ["macro", 10]], vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 50 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "클릭", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: "추천검색어", vtp_eventLabel: ["template", "추천검색 | ", ["macro", 10]], vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 53 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "클릭", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: "메인 카테고리", vtp_eventLabel: ["macro", 10], vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 54 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "클릭", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: ["template", "저널 상품 팝업 | ", ["macro", 9]], vtp_eventLabel: ["template", "저널상품 | ", ["macro", 10]], vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 56 },
        { function: "__gaawc", metadata: ["map"], once_per_event: true, vtp_sendPageView: true, vtp_measurementId: "G-8YLGYN04LR", vtp_enableUserProperties: true, vtp_enableEuid: false, vtp_enableSendFirstPartyUserDataForSgtm: false, tag_id: 57 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_overrideGaSettings: false, vtp_trackType: "TRACK_PAGEVIEW", vtp_gaSettings: ["macro", 3], vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_enableGA4Schema: false, tag_id: 60 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "클릭", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: "카드보내기", vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 62 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "클릭", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: "카드보내기_작성", vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 64 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "클릭", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: "카드보내기_작성", vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 66 },
        { function: "__ua", metadata: ["map"], once_per_event: true, vtp_nonInteraction: false, vtp_overrideGaSettings: false, vtp_eventValue: "1", vtp_eventCategory: "클릭", vtp_trackType: "TRACK_EVENT", vtp_gaSettings: ["macro", 3], vtp_eventAction: "카드보내기", vtp_eventLabel: ["macro", 13], vtp_enableRecaptchaOption: false, vtp_enableUaRlsa: false, vtp_enableUseInternalVersion: false, vtp_enableFirebaseCampaignData: true, vtp_trackTypeIsEvent: true, vtp_enableGA4Schema: false, tag_id: 68 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_5", tag_id: 69 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_6", tag_id: 70 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_9", tag_id: 71 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_11", tag_id: 72 },
        { function: "__ytl", vtp_progressThresholdsPercent: "10, 25, 50, 75, 100", vtp_captureComplete: true, vtp_captureStart: true, vtp_fixMissingApi: true, vtp_triggerStartOption: "WINDOW_LOAD", vtp_radioButtonGroup1: "PERCENTAGE", vtp_capturePause: false, vtp_captureProgress: true, vtp_uniqueTriggerId: "32221934_13", vtp_enableTriggerStartOption: true, tag_id: 73 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_17", tag_id: 74 },
        { function: "__cl", tag_id: 75 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_19", tag_id: 76 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_20", tag_id: 77 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_24", tag_id: 78 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_25", tag_id: 79 },
        { function: "__cl", tag_id: 80 },
        { function: "__cl", tag_id: 81 },
        { function: "__cl", tag_id: 82 },
        { function: "__cl", tag_id: 83 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_36", tag_id: 84 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_37", tag_id: 85 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_39", tag_id: 86 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_41", tag_id: 87 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_43", tag_id: 88 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_45", tag_id: 89 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_47", tag_id: 90 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_49", tag_id: 91 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_51", tag_id: 92 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_52", tag_id: 93 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_55", tag_id: 94 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_58", tag_id: 95 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_59", tag_id: 96 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_61", tag_id: 97 },
        { function: "__lcl", vtp_waitForTags: false, vtp_checkValidation: false, vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_63", tag_id: 98 },
        { function: "__cl", tag_id: 99 },
        { function: "__fsl", vtp_waitForTagsTimeout: "2000", vtp_uniqueTriggerId: "32221934_67", tag_id: 100 },
      ],
      predicates: [
        { function: "_cn", arg0: ["macro", 0], arg1: "http://www.ehyundai.com/giftbook/product_img_20200723/guidebook/Thanksgiving2020_guidebook_01.pdf" },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.linkClick" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_5($|,)))" },
        { function: "_cn", arg0: ["macro", 0], arg1: "http://www.ehyundai.com/giftbook/product_img_20200723/guidebook/Thanksgiving2020_guidebook_02.pdf" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_6($|,)))" },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.js" },
        { function: "_cn", arg0: ["macro", 0], arg1: "https://www.ehyundai.com/newPortal/HBSS/main.do" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_9($|,)))" },
        { function: "_cn", arg0: ["macro", 0], arg1: "checkDelivery.do" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_11($|,)))" },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.video" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_13($|,)))" },
        { function: "_cn", arg0: ["macro", 8], arg1: "tag_click" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_17($|,)))" },
        { function: "_cn", arg0: ["macro", 11], arg1: "on" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_20($|,)))" },
        { function: "_cn", arg0: ["macro", 10], arg1: "엑셀 다운로드" },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.click" },
        { function: "_cn", arg0: ["macro", 0], arg1: "https://www.youtube.com/playlist?list=PLHCKPegIi8V-Wwpvm5HmyO-mMRdJZoz2e" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_19($|,)))" },
        { function: "_cn", arg0: ["macro", 0], arg1: "special" },
        { function: "_cn", arg0: ["macro", 0], arg1: "img_hash" },
        { function: "_cn", arg0: ["macro", 10], arg1: "바로 구매하기" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_36($|,)))" },
        { function: "_cn", arg0: ["macro", 10], arg1: "카카오톡으로 선물하기" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_37($|,)))" },
        { function: "_cn", arg0: ["macro", 0], arg1: "http://www.ehyundai.com/giftbook/product_img_20210106/guidebook/lunaNewYear2021_guidebook_01.pdf" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_39($|,)))" },
        { function: "_cn", arg0: ["macro", 0], arg1: "http://www.ehyundai.com/giftbook/product_img_20210106/guidebook/lunaNewYear2021_journalbook_01.pdf" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_41($|,)))" },
        { function: "_cn", arg0: ["macro", 0], arg1: "https://www.thehyundai.com/front/dpa/searchSpexSectItem.thd?sectId=175514\u0026ReferCode=297\u0026tcCode=0000002062" },
        { function: "_cn", arg0: ["macro", 0], arg1: "https://m.thehyundai.com/front/dpa/searchSpexSectItem.thd?ReferCode=297\u0026amp;tcCode=0000002062\u0026amp;kwCode=0000000000\u0026amp;sectId=175514\u0026amp;LinkUrl=true" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_43($|,)))" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_45($|,)))" },
        { function: "_cn", arg0: ["macro", 8], arg1: "tag_search" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_47($|,)))" },
        { function: "_cn", arg0: ["macro", 8], arg1: "tag_research" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_49($|,)))" },
        { function: "_cn", arg0: ["macro", 8], arg1: "tag_keyword" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_51($|,)))" },
        { function: "_cn", arg0: ["macro", 8], arg1: "tag_link" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_52($|,)))" },
        { function: "_cn", arg0: ["macro", 8], arg1: "tag_journal" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_55($|,)))" },
        { function: "_cn", arg0: ["macro", 3], arg1: "”tag_keyword”" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_59($|,)))" },
        { function: "_css", arg0: ["macro", 12], arg1: ".floating_card_wrapper .inner a" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_61($|,)))" },
        { function: "_css", arg0: ["macro", 12], arg1: ".section_message.intro a" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_63($|,)))" },
        { function: "_css", arg0: ["macro", 10], arg1: ".section_message.question_con .question_list" },
        { function: "_css", arg0: ["macro", 13], arg1: ".section_message.question_con #card_text" },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.formSubmit" },
        { function: "_re", arg0: ["macro", 2], arg1: "(^$|((^|,)32221934_67($|,)))" },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.load" },
      ],
      rules: [
        [
          ["if", 0, 1, 2],
          ["add", 0],
        ],
        [
          ["if", 1, 3, 4],
          ["add", 1],
        ],
        [
          ["if", 5],
          ["add", 2, 22, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
        ],
        [
          ["if", 1, 6, 7],
          ["add", 3],
        ],
        [
          ["if", 1, 8, 9],
          ["add", 4],
        ],
        [
          ["if", 10, 11],
          ["add", 5],
        ],
        [
          ["if", 1, 12, 13],
          ["add", 6],
        ],
        [
          ["if", 1, 14, 15],
          ["add", 7],
        ],
        [
          ["if", 16, 17],
          ["add", 8],
        ],
        [
          ["if", 1, 18, 19],
          ["add", 9],
        ],
        [
          ["if", 17, 20],
          ["add", 10],
        ],
        [
          ["if", 17, 21],
          ["add", 11],
        ],
        [
          ["if", 1, 22, 23],
          ["add", 12],
        ],
        [
          ["if", 1, 24, 25],
          ["add", 12],
        ],
        [
          ["if", 1, 26, 27],
          ["add", 13],
        ],
        [
          ["if", 1, 28, 29],
          ["add", 14],
        ],
        [
          ["if", 1, 30, 31, 32],
          ["add", 15],
        ],
        [
          ["if", 1, 30, 33],
          ["add", 16],
        ],
        [
          ["if", 1, 34, 35],
          ["add", 17],
        ],
        [
          ["if", 1, 36, 37],
          ["add", 18],
        ],
        [
          ["if", 1, 38, 39],
          ["add", 19],
        ],
        [
          ["if", 1, 40, 41],
          ["add", 20],
        ],
        [
          ["if", 1, 42, 43],
          ["add", 21],
        ],
        [
          ["if", 1, 44, 45],
          ["add", 23],
        ],
        [
          ["if", 1, 46, 47],
          ["add", 24],
        ],
        [
          ["if", 1, 48, 49],
          ["add", 25],
        ],
        [
          ["if", 17, 50],
          ["add", 26],
        ],
        [
          ["if", 51, 52, 53],
          ["add", 27],
        ],
        [
          ["if", 54],
          ["add", 32],
        ],
      ],
    },
    runtime: [],
  };

  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var h,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    da;
  if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
  else {
    var ha;
    a: {
      var ja = { a: !0 },
        ka = {};
      try {
        ka.__proto__ = ja;
        ha = ka.a;
        break a;
      } catch (a) {}
      ha = !1;
    }
    da = ha
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var la = da,
    ma = function (a, b) {
      a.prototype = ca(b.prototype);
      a.prototype.constructor = a;
      if (la) la(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Jj = b.prototype;
    },
    na = this || self,
    oa = function (a) {
      return a;
    };
  var ra = function () {},
    sa = function (a) {
      return "function" == typeof a;
    },
    l = function (a) {
      return "string" == typeof a;
    },
    ta = function (a) {
      return "number" == typeof a && !isNaN(a);
    },
    ua = Array.isArray,
    wa = function (a, b) {
      if (a && ua(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    xa = function (a, b) {
      if (!ta(a) || !ta(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    za = function (a, b) {
      for (var c = new ya(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    Ba = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Ca = function (a) {
      return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"));
    },
    Ea = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Fa = function (a) {
      return "false" == String(a).toLowerCase() ? !1 : !!a;
    },
    Ga = function (a) {
      var b = [];
      if (ua(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ha = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ia = function () {
      return new Date(Date.now());
    },
    Ja = function () {
      return Ia().getTime();
    },
    ya = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  ya.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  ya.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ka = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    La = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ma = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Na = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Oa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Qa = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Ra = /^\w{1,9}$/,
    Sa = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      Ba(a, function (d, e) {
        Ra.test(d) && e && c.push(d);
      });
      return c.join(b);
    };
  var Ta,
    Ua = function () {
      if (void 0 === Ta) {
        var a = null,
          b = na.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", { createHTML: oa, createScript: oa, createScriptURL: oa });
          } catch (c) {
            na.console && na.console.error(c.message);
          }
          Ta = a;
        } else Ta = a;
      }
      return Ta;
    };
  var Wa = function (a, b) {
    this.m = b === Va ? a : "";
  };
  Wa.prototype.toString = function () {
    return this.m + "";
  };
  var Va = {};
  var Xa = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function Ya() {
    var a = na.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  function Za(a) {
    return -1 != Ya().indexOf(a);
  }
  var $a = {},
    ab = function (a, b, c) {
      this.m = c === $a ? a : "";
    };
  ab.prototype.toString = function () {
    return this.m.toString();
  };
  var bb = function (a) {
      return a instanceof ab && a.constructor === ab ? a.m : "type_error:SafeHtml";
    },
    cb = function (a) {
      var b = Ua(),
        c = b ? b.createHTML(a) : a;
      return new ab(c, null, $a);
    },
    db = new ab((na.trustedTypes && na.trustedTypes.emptyHTML) || "", 0, $a); /*

 SPDX-License-Identifier: Apache-2.0
*/
  var eb = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    fb = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var gb = (function (a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  })(function () {
    var a = document.createElement("div"),
      b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    var c = a.firstChild.firstChild;
    a.innerHTML = bb(db);
    return !c.parentElement;
  });
  var B = window,
    F = document,
    hb = navigator,
    ib = F.currentScript && F.currentScript.src,
    jb = function (a, b) {
      var c = B[a];
      B[a] = void 0 === c ? b : c;
      return B[a];
    },
    kb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } && ((a.onreadystatechange = null), b());
            }));
    },
    lb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    mb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function nb(a, b, c) {
    b &&
      Ba(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var ob = function (a, b, c, d) {
      var e = F.createElement("script");
      nb(e, d, lb);
      e.type = "text/javascript";
      e.async = !0;
      var f,
        g = Ua(),
        k = g ? g.createScriptURL(a) : a;
      f = new Wa(k, Va);
      e.src = f instanceof Wa && f.constructor === Wa ? f.m : "type_error:TrustedResourceUrl";
      var m,
        n,
        p = ((e.ownerDocument && e.ownerDocument.defaultView) || window).document,
        r = null === (n = p.querySelector) || void 0 === n ? void 0 : n.call(p, "script[nonce]");
      (m = r ? r.nonce || r.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", m);
      kb(e, b);
      c && (e.onerror = c);
      var u = F.getElementsByTagName("script")[0] || F.body || F.head;
      u.parentNode.insertBefore(e, u);
      return e;
    },
    pb = function () {
      if (ib) {
        var a = ib.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    tb = function (a, b, c, d, e) {
      var f = e,
        g = !1;
      f || ((f = F.createElement("iframe")), (g = !0));
      nb(f, c, mb);
      d &&
        Ba(d, function (m, n) {
          f.dataset[m] = n;
        });
      f.height = "0";
      f.width = "0";
      f.style.display = "none";
      f.style.visibility = "hidden";
      if (g) {
        var k = (F.body && F.body.lastChild) || F.body || F.head;
        k.parentNode.insertBefore(f, k);
      }
      kb(f, b);
      void 0 !== a && (f.src = a);
      return f;
    },
    ub = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
      return d;
    },
    vb = function (a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c);
    },
    wb = function (a, b, c) {
      a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c);
    },
    H = function (a) {
      B.setTimeout(a, 0);
    },
    xb = function (a, b) {
      return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
    },
    yb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    zb = function (a) {
      var b = F.createElement("div"),
        c = cb("A<div>" + a + "</div>"),
        d = b;
      if (gb()) for (; d.lastChild; ) d.removeChild(d.lastChild);
      d.innerHTML = bb(c);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Ab = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Bb = function (a) {
      var b;
      try {
        b = hb.sendBeacon && hb.sendBeacon(a);
      } catch (c) {}
      b || ub(a);
    },
    Cb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Db = function (a) {
      var b = F.featurePolicy;
      return b && sa(b.allowsFeature) ? b.allowsFeature(a) : !1;
    }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Eb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Gb = function (a) {
      if (null == a) return String(a);
      var b = Eb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Hb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Ib = function (a) {
      if (!a || "object" != Gb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (a.constructor && !Hb(a, "constructor") && !Hb(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Hb(a, b);
    },
    K = function (a, b) {
      var c = b || ("array" == Gb(a) ? [] : {}),
        d;
      for (d in a)
        if (Hb(a, d)) {
          var e = a[d];
          "array" == Gb(e) ? ("array" != Gb(c[d]) && (c[d] = []), (c[d] = K(e, c[d]))) : Ib(e) ? (Ib(c[d]) || (c[d] = {}), (c[d] = K(e, c[d]))) : (c[d] = e);
        }
      return c;
    };
  var Jb = function (a) {
    if (void 0 === a || ua(a) || Ib(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  var Kb = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return { $g: a("consent"), ah: a("consent_always_fire"), cf: a("convert_case_to"), df: a("convert_false_to"), ef: a("convert_null_to"), ff: a("convert_true_to"), hf: a("convert_undefined_to"), vj: a("debug_mode_metadata"), ob: a("function"), Jh: a("instance_name"), Nh: a("live_only"), Oh: a("malware_disabled"), Ph: a("metadata"), xj: a("original_activity_id"), yj: a("original_vendor_template_id"), Th: a("once_per_event"), Nf: a("once_per_load"), Aj: a("priority_override"), Bj: a("respected_consent_types"), Sf: a("setup_tags"), Uf: a("tag_id"), Vf: a("teardown_tags") };
  })();
  var fc;
  var gc = [],
    hc = [],
    jc = [],
    kc = [],
    lc = [],
    mc = {},
    nc,
    oc,
    pc,
    qc = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = mc[c],
        f = {},
        g;
      for (g in a)
        if (a.hasOwnProperty(g))
          if (0 === g.indexOf("vtp_")) e && d && d.fg && d.fg(a[g]), (f[void 0 !== e ? g : g.substr(4)] = a[g]);
          else if (g === Kb.ah.toString() && a[g]) {
          }
      e && d && d.eg && (f.vtp_gtmCachedValues = d.eg);
      return void 0 !== e ? e(f) : fc(c, f, b);
    },
    sc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = rc(a[e], b, c));
      return d;
    },
    rc = function (a, b, c) {
      if (ua(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(rc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = gc[f];
            if (!g || b.Je(g)) return;
            c[f] = !0;
            try {
              var k = sc(g, b, c);
              k.vtp_gtmEventId = b.id;
              d = qc(k, { event: b, index: f, type: 2 });
              pc && (d = pc.gi(d, k));
            } catch (A) {
              b.yg && b.yg(A, Number(f)), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var m = 1; m < a.length; m += 2) d[rc(a[m], b, c)] = rc(a[m + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var n = !1, p = 1; p < a.length; p++) {
              var r = rc(a[p], b, c);
              oc && (n = n || r === oc.Yc);
              d.push(r);
            }
            return oc && n ? oc.ki(d) : d.join("");
          case "escape":
            d = rc(a[1], b, c);
            if (oc && ua(a[1]) && "macro" === a[1][0] && oc.Hi(a)) return oc.Wi(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) Lb[a[u]] && (d = Lb[a[u]](d));
            return d;
          case "tag":
            var t = a[1];
            if (!kc[t]) throw Error("Unable to resolve tag reference " + t + ".");
            return (d = { kg: a[2], index: t });
          case "zb":
            var q = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            q["function"] = a[1];
            var v = tc(q, b, c),
              y = !!a[4];
            return y || 2 !== v ? y !== (1 === v) : null;
          default:
            throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
        }
      }
      return a;
    },
    tc = function (a, b, c) {
      try {
        return nc(sc(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var wc = function (a) {
      function b(u) {
        for (var t = 0; t < u.length; t++) d[u[t]] = !0;
      }
      for (var c = [], d = [], e = uc(a), f = 0; f < hc.length; f++) {
        var g = hc[f],
          k = vc(g, e);
        if (k) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === k && b(g.block || []);
      }
      for (var p = [], r = 0; r < kc.length; r++) c[r] && !d[r] && (p[r] = !0);
      return p;
    },
    vc = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var k = b(f[g]);
        if (2 === k) return null;
        if (1 === k) return !1;
      }
      return !0;
    },
    uc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = tc(jc[c], a));
        return b[c];
      };
    };
  var xc = {
    gi: function (a, b) {
      b[Kb.cf] && "string" === typeof a && (a = 1 == b[Kb.cf] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Kb.ef) && null === a && (a = b[Kb.ef]);
      b.hasOwnProperty(Kb.hf) && void 0 === a && (a = b[Kb.hf]);
      b.hasOwnProperty(Kb.ff) && !0 === a && (a = b[Kb.ff]);
      b.hasOwnProperty(Kb.df) && !1 === a && (a = b[Kb.df]);
      return a;
    },
  };
  var O = { Lb: "_ee", dd: "_syn_or_mod", Cj: "_uei", de: "_eu", zj: "_pci", Ib: "event_callback", Nc: "event_timeout", ya: "gtag.config", Ka: "gtag.get", wa: "purchase", Eb: "refund", fb: "begin_checkout", Bb: "add_to_cart", Cb: "remove_from_cart", kh: "view_cart", kf: "add_to_wishlist", xa: "view_item", Db: "view_promotion", Fd: "select_promotion", Ed: "select_item", hb: "view_item_list", jf: "add_payment_info", jh: "add_shipping_info", Ma: "value_key", Wa: "value_callback", O: "allow_ad_personalization_signals", cc: "restricted_data_processing", Yb: "allow_google_signals", qa: "cookie_expires", Gb: "cookie_update", fc: "session_duration", Sc: "session_engaged_time", Oa: "user_properties", ra: "transport_url", U: "ads_data_redaction", Aa: "user_data", ac: "first_party_collection", C: "ad_storage", J: "analytics_storage", af: "region", bf: "wait_for_update", oa: "conversion_linker", Ea: "conversion_cookie_prefix", ia: "value", fa: "currency", Jf: "trip_type", aa: "items", Bf: "passengers", Id: "allow_custom_scripts", hc: "session_id", Gf: "quantity", Ya: "transaction_id", kb: "language", Lc: "country", Kc: "allow_enhanced_conversions", Nd: "aw_merchant_id", Ld: "aw_feed_country", Md: "aw_feed_language", Kd: "discount", W: "developer_id", Tc: "delivery_postal_code", Td: "estimated_delivery_date", Rd: "shipping", $d: "new_customer", Od: "customer_lifetime_value", Sd: "enhanced_conversions", Xb: "page_view", ka: "linker", N: "domains", Kb: "decorate_forms", xf: "enhanced_conversions_automatic_settings", rh: "auto_detection_enabled", yf: "ga_temp_client_id", Gd: "user_engagement", eh: "app_remove", fh: "app_store_refund", gh: "app_store_subscription_cancel", hh: "app_store_subscription_convert", ih: "app_store_subscription_renew", lh: "first_open", mh: "first_visit", nh: "in_app_purchase", oh: "session_start", ph: "allow_display_features", Zb: "campaign", lf: "campaign_content", nf: "campaign_id", pf: "campaign_medium", qf: "campaign_name", rf: "campaign_source", sf: "campaign_term", ib: "client_id", ja: "cookie_domain", Fb: "cookie_name", Va: "cookie_path", Fa: "cookie_flags", $b: "custom_map", Wd: "groups", Af: "non_interaction", lb: "page_location", ae: "page_path", Na: "page_referrer", Qc: "page_title", la: "send_page_view", nb: "send_to", be: "session_engaged", Zd: "_logged_in_state", ce: "session_number", Fh: "tracking_id", Za: "url_passthrough", Jb: "accept_incoming", bc: "url_position", Ef: "phone_conversion_number", Cf: "phone_conversion_callback", Df: "phone_conversion_css_class", Ff: "phone_conversion_options", Ch: "phone_conversion_ids", Bh: "phone_conversion_country_code", La: "aw_remarketing", Jd: "aw_remarketing_only", Hd: "gclid", qh: "auid", wh: "affiliation", wf: "tax", Qd: "list_name", vf: "checkout_step", uf: "checkout_option", xh: "coupon", yh: "promotions", $a: "user_id", Dh: "retoken", za: "cookie_prefix", tf: "disable_merchant_reported_purchases", vh: "dc_natural_search", uh: "dc_custom_params", zf: "method", Eh: "search_term", th: "content_type", Ah: "optimize_id", zh: "experiments", Xa: "google_signals" };
  O.Pc = "google_tld";
  O.Uc = "update";
  O.Ud = "firebase_id";
  O.Vd = "ga_restrict_domain";
  O.Mc = "event_settings";
  O.Pd = "dynamic_event_settings";
  O.ic = "user_data_settings";
  O.Hf = "screen_name";
  O.jb = "_x_19";
  O.Hb = "_ecid";
  O.Oc = "_x_20";
  O.Yd = "internal_traffic_results";
  O.If = "traffic_type";
  O.Rc = "referral_exclusion_definition";
  O.Xd = "ignore_referrer";
  O.sh = "content_group";
  O.da = "allow_interest_groups";
  var Zc = {};
  O.Lf = Object.freeze(((Zc[O.jf] = 1), (Zc[O.jh] = 1), (Zc[O.Bb] = 1), (Zc[O.Cb] = 1), (Zc[O.kh] = 1), (Zc[O.fb] = 1), (Zc[O.Ed] = 1), (Zc[O.hb] = 1), (Zc[O.Fd] = 1), (Zc[O.Db] = 1), (Zc[O.wa] = 1), (Zc[O.Eb] = 1), (Zc[O.xa] = 1), (Zc[O.kf] = 1), Zc));
  O.fe = Object.freeze([O.O, O.Yb, O.Gb]);
  O.Rh = Object.freeze([].concat(O.fe));
  O.he = Object.freeze([O.qa, O.Nc, O.fc, O.Sc]);
  O.Sh = Object.freeze([].concat(O.he));
  var $c = {};
  O.Bd = (($c[O.C] = "1"), ($c[O.J] = "2"), $c);
  var fd = {},
    gd = function (a, b) {
      fd[a] = fd[a] || [];
      fd[a][b] = !0;
    },
    hd = function (a) {
      for (var b = [], c = fd[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
      return b.join("");
    };
  var id = function (a) {
    gd("GTM", a);
  };
  var R = {},
    U = (B.google_tag_manager = B.google_tag_manager || {}),
    jd = Math.random();
  R.H = "GTM-TSF6F7M";
  R.bd = "1o0";
  R.V = "dataLayer";
  R.dh = "ChEIgNy+jwYQoJ/F2OClruGDARIkAM3y6rXw+j/vf/zVMum3COJaQE2bQVLOy1hVOnI1KVIuqEjaGgKTkA\x3d\x3d";
  var kd = { __cl: !0, __ecl: !0, __ehl: !0, __evl: !0, __fal: !0, __fil: !0, __fsl: !0, __hl: !0, __jel: !0, __lcl: !0, __sdl: !0, __tl: !0, __ytl: !0 },
    ld = { __paused: !0, __tg: !0 },
    md;
  for (md in kd) kd.hasOwnProperty(md) && (ld[md] = !0);
  R.Cd = "www.googletagmanager.com";
  var nd,
    od = R.Cd + "/gtm.js";
  nd = od;
  var pd = Fa(""),
    qd = null,
    rd = null,
    sd = "https://www.googletagmanager.com/a?id=" + R.H + "&cv=21",
    td = {},
    ud = {},
    vd = function () {
      var a = U.sequence || 1;
      U.sequence = a + 1;
      return a;
    };
  R.bh = "";
  var yd = "";
  R.cd = yd;
  var zd = {},
    Ad = new ya(),
    Bd = {},
    Cd = {},
    Fd = {
      name: R.V,
      set: function (a, b) {
        K(Qa(a, b), Bd);
        Dd();
      },
      get: function (a) {
        return Ed(a, 2);
      },
      reset: function () {
        Ad = new ya();
        Bd = {};
        Dd();
      },
    },
    Ed = function (a, b) {
      return 2 != b ? Ad.get(a) : Gd(a);
    },
    Gd = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = Bd, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Hd = function (a, b) {
      Cd.hasOwnProperty(a) || (Ad.set(a, b), K(Qa(a, b), Bd), Dd());
    },
    Dd = function (a) {
      Ba(Cd, function (b, c) {
        Ad.set(b, c);
        K(Qa(b, void 0), Bd);
        K(Qa(b, c), Bd);
        a && delete Cd[b];
      });
    },
    Jd = function (a, b, c) {
      zd[a] = zd[a] || {};
      zd[a][b] = Id(b, c);
    },
    Id = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Gd(a) : Ad.get(a);
      "array" === Gb(d) || "object" === Gb(d) ? (c = K(d)) : (c = d);
      return c;
    },
    Kd = function (a, b) {
      if (zd[a]) return zd[a][b];
    },
    Ld = function (a, b) {
      zd[a] && delete zd[a][b];
    };
  var Md = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    Nd = { cl: ["ecl"], customPixels: ["nonGooglePixels"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"], html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], nonGooglePixels: [], nonGoogleScripts: ["nonGooglePixels"], nonGoogleIframes: ["nonGooglePixels"] },
    Od = { cl: ["ecl"], customPixels: ["customScripts", "html"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"], html: ["customScripts"], customScripts: ["html"], nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"], nonGoogleScripts: ["customScripts", "html"], nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"] },
    Pd = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
  var Qd = function () {
      var a = !1;
      return a;
    },
    Sd = function (a) {
      var b = Ed("gtm.allowlist") || Ed("gtm.whitelist");
      b && id(9);
      Qd() && (b = "google gtagfl lcl zone oid op".split(" "));
      var c = b && Oa(Ga(b), Nd),
        d = Ed("gtm.blocklist") || Ed("gtm.blacklist");
      d || ((d = Ed("tagTypeBlacklist")) && id(3));
      d ? id(8) : (d = []);
      Rd() && ((d = Ga(d)), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Ga(d).indexOf("google") && id(2);
      var e = d && Oa(Ga(d), Od),
        f = {};
      return function (g) {
        var k = g && g[Kb.ob];
        if (!k || "string" != typeof k) return !0;
        k = k.replace(/^_*/, "");
        if (void 0 !== f[k]) return f[k];
        var m = ud[k] || [],
          n = a(k, m);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(k))
                if (m && 0 < m.length)
                  for (var r = 0; r < m.length; r++) {
                    if (0 > c.indexOf(m[r])) {
                      id(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var u = !1;
        if (d) {
          var t = 0 <= e.indexOf(k);
          if (t) u = t;
          else {
            var q = za(e, m || []);
            q && id(10);
            u = q;
          }
        }
        var v = !n || u;
        v || !(0 <= m.indexOf("sandboxedScripts")) || (c && -1 !== c.indexOf("sandboxedScripts")) || (v = za(e, Pd));
        return (f[k] = v);
      };
    },
    Rd = function () {
      return Md.test(B.location && B.location.hostname);
    };
  var Td = {
      active: !0,
      isAllowed: function () {
        return !0;
      },
    },
    Ud = function (a) {
      var b = U.zones;
      return b ? b.checkState(R.H, a) : Td;
    },
    Vd = function (a) {
      var b = U.zones;
      !b && a && (b = U.zones = a());
      return b;
    };
  var Wd = new (function (a, b) {
    this.m = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var Yd = function () {
    var a = Xd,
      b = "He";
    if (a.He && a.hasOwnProperty(b)) return a.He;
    var c = new a();
    a.He = c;
    a.hasOwnProperty(b);
    return c;
  };
  var Xd = function () {
    var a = {};
    this.m = function () {
      var b = Wd.m,
        c = Wd.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.o = function () {
      a[Wd.m] = !0;
    };
  };
  var Zd = [];
  function $d() {
    var a = jb("google_tag_data", {});
    a.ics || (a.ics = { entries: {}, set: ae, update: be, addListener: ce, notifyListeners: de, active: !1, usedDefault: !1, usedUpdate: !1, accessedDefault: !1, accessedAny: !1, wasSetLate: !1 });
    return a.ics;
  }
  function ae(a, b, c, d, e, f) {
    var g = $d();
    !g.usedDefault && g.usedUpdate && (g.wasSetLate = !0);
    g.usedDefault || (!g.accessedDefault && !g.accessedAny) || (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var k = g.entries,
        m = k[a] || {},
        n = m.region,
        p = c && l(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var r = !!(f && 0 < f && void 0 === m.update),
          u = { region: p, initial: "granted" === b, update: m.update, quiet: r };
        if ("" !== d || !1 !== m.initial) k[a] = u;
        r &&
          B.setTimeout(function () {
            k[a] === u && u.quiet && ((u.quiet = !1), ee(a), de(), gd("TAGGING", 2));
          }, f);
      }
    }
  }
  function be(a, b) {
    var c = $d();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = fe(a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = fe(a);
      f.quiet ? ((f.quiet = !1), ee(a)) : g !== d && ee(a);
    }
  }
  function ce(a, b) {
    Zd.push({ xe: a, ui: b });
  }
  function ee(a) {
    for (var b = 0; b < Zd.length; ++b) {
      var c = Zd[b];
      ua(c.xe) && -1 !== c.xe.indexOf(a) && (c.Dg = !0);
    }
  }
  function de(a) {
    for (var b = 0; b < Zd.length; ++b) {
      var c = Zd[b];
      if (c.Dg) {
        c.Dg = !1;
        try {
          c.ui({ consentEventId: a });
        } catch (d) {}
      }
    }
  }
  var fe = function (a) {
      var b = $d();
      b.accessedAny = !0;
      var c = b.entries[a] || {};
      return void 0 !== c.update ? c.update : c.initial;
    },
    ge = function (a) {
      var b = $d();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    he = function (a) {
      var b = $d();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    ie = function () {
      if (!Yd().m()) return !1;
      var a = $d();
      a.accessedAny = !0;
      return a.active;
    },
    je = function () {
      var a = $d();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    ke = function (a, b) {
      $d().addListener(a, b);
    },
    le = function (a) {
      $d().notifyListeners(a);
    },
    me = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!he(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        ke(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    ne = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var k = d[g];
          !1 === fe(k) || e[k] || (f.push(k), (e[k] = !0));
        }
        return f;
      }
      var d = l(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        ke(d, function (f) {
          var g = c();
          0 < g.length && ((f.xe = g), a(f));
        });
    };
  function oe() {}
  function pe() {}
  function qe(a) {
    for (var b = [], c = 0; c < te.length; c++) {
      var d = a(te[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var te = [O.C, O.J],
    ue = function (a) {
      var b = a[O.af];
      b && id(40);
      var c = a[O.bf];
      c && id(41);
      for (var d = ua(b) ? b : [b], e = { Vb: 0 }; e.Vb < d.length; e = { Vb: e.Vb }, ++e.Vb)
        Ba(
          a,
          (function (f) {
            return function (g, k) {
              if (g !== O.af && g !== O.bf) {
                var m = d[f.Vb];
                $d().set(g, k, m, "KR", "KR-41", c);
              }
            };
          })(e)
        );
    },
    ve = 0,
    we = function (a, b) {
      Ba(a, function (e, f) {
        $d().update(e, f);
      });
      le(b);
      var c = Ja(),
        d = c - ve;
      ve && 0 <= d && 1e3 > d && id(66);
      ve = c;
    },
    xe = function (a) {
      var b = fe(a);
      return void 0 != b ? b : !0;
    },
    ye = function () {
      return "G1" + qe(fe);
    },
    ze = function () {
      return "G1" + qe(ge);
    },
    Ae = function (a, b) {
      ne(a, b);
    },
    Be = function (a, b) {
      me(a, b);
    };
  var De = function (a) {
      return Ce ? F.querySelectorAll(a) : null;
    },
    Ee = function (a, b) {
      if (!Ce) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
        d = a;
      if (!F.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Fe = !1;
  if (F.querySelectorAll)
    try {
      var Ge = F.querySelectorAll(":root");
      Ge && 1 == Ge.length && Ge[0] == F.documentElement && (Fe = !0);
    } catch (a) {}
  var Ce = Fe;
  var $e = function () {
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.globalConfig = {};
      this.remoteConfig = {};
      this.onSuccess = function () {};
      this.onFailure = function () {};
      this.setContainerTypeLoaded = function () {};
      this.getContainerTypeLoaded = function () {};
      this.eventId = void 0;
      this.isGtmEvent = !1;
    },
    af = function (a) {
      var b = new $e();
      b.eventModel = a;
      return b;
    },
    bf = function (a, b) {
      a.targetConfig = b;
      return a;
    },
    cf = function (a, b) {
      a.containerConfig = b;
      return a;
    },
    df = function (a, b) {
      a.globalConfig = b;
      return a;
    },
    ef = function (a, b) {
      a.remoteConfig = b;
      return a;
    },
    ff = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    gf = function (a, b) {
      a.setContainerTypeLoaded = b;
      return a;
    },
    hf = function (a, b) {
      a.getContainerTypeLoaded = b;
      return a;
    },
    jf = function (a, b) {
      a.onFailure = b;
      return a;
    };
  $e.prototype.getWithConfig = function (a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
  };
  var kf = function (a) {
      function b(d) {
        for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1;
      }
      var c = {};
      b(a.eventModel);
      b(a.targetConfig);
      b(a.containerConfig);
      b(a.globalConfig);
      return Object.keys(c);
    },
    lf = function (a, b, c) {
      function d(g) {
        Ib(g) &&
          Ba(g, function (k, m) {
            f = !0;
            e[k] = m;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) || (d(a.remoteConfig[b]), d(a.globalConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
      (c && 2 !== c) || d(a.eventModel[b]);
      return f ? e : void 0;
    },
    mf = function (a) {
      var b = [O.Zb, O.lf, O.nf, O.pf, O.qf, O.rf, O.sf],
        c = {},
        d = !1,
        e = function (f) {
          for (var g = 0; g < b.length; g++) void 0 !== f[b[g]] && ((c[b[g]] = f[b[g]]), (d = !0));
          return d;
        };
      if (e(a.eventModel) || e(a.targetConfig) || e(a.containerConfig) || e(a.globalConfig)) return c;
      e(a.remoteConfig);
      return c;
    },
    nf = function (a) {
      var b = [],
        c;
      for (c in a.eventModel) c !== O.Lb && a.eventModel.hasOwnProperty(c) && void 0 !== a.eventModel[c] && b.push(c);
      return b;
    };
  var of,
    pf = !1,
    qf = function (a) {
      if (!pf) {
        pf = !0;
        of = of || {};
      }
      return of[a];
    };
  var rf = function (a) {
    if (F.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top == b.bottom || b.left == b.right || !B.getComputedStyle) return !0;
    var c = B.getComputedStyle(a, null);
    if ("hidden" === c.visibility) return !0;
    for (var d = a, e = c; d; ) {
      if ("none" === e.display) return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var k = g.indexOf("opacity(");
        0 <= k && ((g = g.substring(k + 8, g.indexOf(")", k))), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), (f = Math.min(g, f)));
      }
      if (void 0 !== f && 0 >= f) return !0;
      (d = d.parentElement) && (e = B.getComputedStyle(d, null));
    }
    return !1;
  };
  var sf = function () {
      var a = F.body,
        b = F.documentElement || (a && a.parentElement),
        c,
        d;
      if (F.compatMode && "BackCompat" !== F.compatMode) (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
      else {
        var e = function (f, g) {
          return f && g ? Math.min(f, g) : Math.max(f, g);
        };
        id(7);
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
      }
      return { width: d, height: c };
    },
    tf = function (a) {
      var b = sf(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        g = e.right - e.left;
      return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0;
    };
  var Af = /:[0-9]+$/,
    Bf = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var g = f.slice(1).join("=");
          return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
        }
      }
    },
    Ef = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b) a.protocol = Cf(a.protocol) || Cf(B.location.protocol);
      "port" === b ? (a.port = String(Number(a.hostname ? a.port : B.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : ""))) : "host" === b && (a.hostname = (a.hostname || B.location.hostname).replace(Af, "").toLowerCase());
      return Df(a, b, c, d, e);
    },
    Df = function (a, b, c, d, e) {
      var f,
        g = Cf(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Ff(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(Af, "").toLowerCase();
          if (c) {
            var k = /^www\d*\./.exec(f);
            k && k[0] && (f = f.substr(k[0].length));
          }
          break;
        case "port":
          f = String(Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
          break;
        case "path":
          a.pathname || a.hostname || gd("TAGGING", 1);
          f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = Bf(f, e, void 0));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Cf = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Ff = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Gf = function (a) {
      var b = F.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || gd("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(Af, "");
      return { href: b.href, protocol: b.protocol, host: b.host, hostname: d, pathname: c, search: b.search, hash: b.hash, port: b.port };
    },
    Hf = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 != p;
          })
          .join("&");
      }
      var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
        e = Gf(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        k = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === k[0] && (k = k.substring(1));
      g = c(g);
      k = c(k);
      "" !== g && (g = "?" + g);
      "" !== k && (k = "#" + k);
      var m = "" + f + g + k;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    };
  var If = {};
  var eg = {},
    fg = function (a, b) {
      if (B._gtmexpgrp && B._gtmexpgrp.hasOwnProperty(a)) return B._gtmexpgrp[a];
      void 0 === eg[a] && (eg[a] = Math.floor(Math.random() * b));
      return eg[a];
    };
  var gg = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a) for (b = 0, d = a.length - 1; 0 <= d; d--) (e = a.charCodeAt(d)), (b = ((b << 6) & 268435455) + e + (e << 14)), (c = b & 266338304), (b = 0 != c ? b ^ (c >> 21) : b);
    return b;
  };
  var hg = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        k = g[0].replace(/^\s*|\s*$/g, "");
      if (k && k == a) {
        var m = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  function ig(a) {
    return "null" !== a.origin;
  }
  var lg = function (a, b, c, d) {
      return jg(d) ? hg(a, String(b || kg()), c) : [];
    },
    og = function (a, b, c, d, e) {
      if (jg(e)) {
        var f = mg(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = ng(
            f,
            function (g) {
              return g.ld;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = ng(
            f,
            function (g) {
              return g.zc;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function pg(a, b, c, d) {
    var e = kg(),
      f = window;
    ig(f) && (f.document.cookie = a);
    var g = kg();
    return e != g || (void 0 != c && 0 <= lg(b, g, !1, d).indexOf(c));
  }
  var tg = function (a, b, c) {
      function d(t, q, v) {
        if (null == v) return delete g[q], t;
        g[q] = v;
        return t + "; " + q + "=" + v;
      }
      function e(t, q) {
        if (null == q) return delete g[q], t;
        g[q] = !0;
        return t + "; " + q;
      }
      if (!jg(c.Ra)) return 2;
      var f;
      void 0 == b ? (f = a + "=deleted; expires=" + new Date(0).toUTCString()) : (c.encode && (b = encodeURIComponent(b)), (b = qg(b)), (f = a + "=" + b));
      var g = {};
      f = d(f, "path", c.path);
      var k;
      c.expires instanceof Date ? (k = c.expires.toUTCString()) : null != c.expires && (k = "" + c.expires);
      f = d(f, "expires", k);
      f = d(f, "max-age", c.Fj);
      f = d(f, "samesite", c.Hj);
      c.Ij && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = rg(), p = 0; p < n.length; ++p) {
          var r = "none" !== n[p] ? n[p] : void 0,
            u = d(f, "domain", r);
          u = e(u, c.flags);
          if (!sg(r, c.path) && pg(u, a, b, c.Ra)) return 0;
        }
        return 1;
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return sg(m, c.path) ? 1 : pg(f, a, b, c.Ra) ? 0 : 1;
    },
    ug = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return tg(a, b, c);
    };
  function ng(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c ? d.push(k) : void 0 === f || m < f ? ((e = [k]), (f = m)) : m === f && e.push(k);
    }
    return 0 < d.length ? d : e;
  }
  function mg(a, b, c) {
    for (var d = [], e = lg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || -1 !== b.indexOf(k)) {
        var m = g.shift();
        m && ((m = m.split("-")), d.push({ id: g.join("."), ld: 1 * m[0] || 1, zc: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var qg = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    vg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    wg = /(^|\.)doubleclick\.net$/i,
    sg = function (a, b) {
      return wg.test(window.document.location.hostname) || ("/" === b && vg.test(a));
    },
    kg = function () {
      return ig(window) ? window.document.cookie : "";
    },
    rg = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      wg.test(e) || vg.test(e) || a.push("none");
      return a;
    },
    jg = function (a) {
      if (!Yd().m() || !a || !ie()) return !0;
      if (!he(a)) return !1;
      var b = fe(a);
      return null == b ? !0 : !!b;
    };
  var xg = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (gg(a) & 2147483647)) : String(b);
    },
    yg = function (a) {
      return [xg(a), Math.round(Ja() / 1e3)].join(".");
    },
    Bg = function (a, b, c, d, e) {
      var f = zg(b);
      return og(a, f, Ag(c), d, e);
    },
    Cg = function (a, b, c, d) {
      var e = "" + zg(c),
        f = Ag(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    zg = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Ag = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  function Dg(a, b, c) {
    var d,
      e = Number(null != a.ub ? a.ub : void 0);
    0 !== e && (d = new Date((b || Ja()) + 1e3 * (e || 7776e3)));
    return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d };
  }
  var Eg = ["1"],
    Fg = {},
    Gg = {},
    Kg = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Hg(a.prefix);
      if (!Fg[c] && !Ig(c, a.path, a.domain) && b) {
        var d = Hg(a.prefix),
          e = yg();
        if (0 === Jg(d, e, a)) {
          var f = jb("google_tag_data", {});
          f._gcl_au ? gd("GTM", 57) : (f._gcl_au = e);
        }
        Ig(c, a.path, a.domain);
      }
    };
  function Jg(a, b, c, d) {
    var e = Cg(b, "1", c.domain, c.path),
      f = Dg(c, d);
    f.Ra = "ad_storage";
    return ug(a, e, f);
  }
  function Ig(a, b, c) {
    var d = Bg(a, b, c, Eg, "ad_storage");
    if (!d) return !1;
    var e = d.split(".");
    5 === e.length ? ((Fg[a] = e.slice(0, 2).join(".")), (Gg[a] = { id: e.slice(2, 4).join("."), vg: Number(e[4]) || 0 })) : 3 === e.length ? (Gg[a] = { id: e.slice(0, 2).join("."), vg: Number(e[2]) || 0 }) : (Fg[a] = d);
    return !0;
  }
  function Hg(a) {
    return (a || "_gcl") + "_au";
  }
  var Lg = function (a) {
    for (var b = [], c = F.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
      var f = c[e].match(d);
      f && b.push({ Xe: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0 });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  };
  function Mg(a, b) {
    var c = Lg(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (!("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) && Number(f[1])) {
        d[c[e].Xe] || (d[c[e].Xe] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), sa: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Xe].push(g);
      }
    }
    return d;
  }
  function Ng() {
    for (var a = Og, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Pg() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Og, Qg;
  function Rg(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Qg[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Og = Og || Pg();
    Qg = Qg || Ng();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (64 === k && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g && ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))), 64 != k && (c += String.fromCharCode(((g << 6) & 192) | k)));
    }
  }
  var Sg;
  var Wg = function () {
      var a = Tg,
        b = Ug,
        c = Vg(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        vb(F, "mousedown", d);
        vb(F, "keyup", d);
        vb(F, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Xg = function (a, b, c, d, e) {
      var f = { callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e };
      Vg().decorators.push(f);
    },
    Yg = function (a, b, c) {
      for (var d = Vg().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          k;
        if ((k = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== F.location.hostname))
              for (var r = 0; r < m.length; r++)
                if (m[r] instanceof RegExp) {
                  if (m[r].test(n)) {
                    k = !0;
                    break a;
                  }
                } else if (0 <= n.indexOf(m[r]) || (p && 0 <= m[r].indexOf(n))) {
                  k = !0;
                  break a;
                }
            k = !1;
          }
        if (k) {
          var u = g.placement;
          void 0 == u && (u = g.fragment ? 2 : 1);
          u === b && Ma(e, g.callback());
        }
      }
      return e;
    };
  function Vg() {
    var a = jb("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Zg = /(.*?)\*(.*?)\*(.*)/,
    $g = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    ah = /^(?:www\.|m\.|amp\.)+/,
    bh = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function ch(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var eh = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
          b.push(c);
          var e = b,
            f = e.push,
            g,
            k = String(d);
          Og = Og || Pg();
          Qg = Qg || Ng();
          for (var m = [], n = 0; n < k.length; n += 3) {
            var p = n + 1 < k.length,
              r = n + 2 < k.length,
              u = k.charCodeAt(n),
              t = p ? k.charCodeAt(n + 1) : 0,
              q = r ? k.charCodeAt(n + 2) : 0,
              v = u >> 2,
              y = ((u & 3) << 4) | (t >> 4),
              A = ((t & 15) << 2) | (q >> 6),
              w = q & 63;
            r || ((w = 64), p || (A = 64));
            m.push(Og[v], Og[y], Og[A], Og[w]);
          }
          g = m.join("");
          f.call(e, g);
        }
      }
    var z = b.join("*");
    return ["1", dh(z), z].join("*");
  };
  function dh(a, b) {
    var c = [B.navigator.userAgent, new Date().getTimezoneOffset(), hb.userLanguage || hb.language, Math.floor(Ja() / 60 / 1e3) - (void 0 === b ? 0 : b), a].join("*"),
      d;
    if (!(d = Sg)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, k = 0; 8 > k; k++) g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Sg = d;
    for (var m = 4294967295, n = 0; n < c.length; n++) m = (m >>> 8) ^ Sg[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function fh() {
    return function (a) {
      var b = Gf(B.location.href),
        c = b.search.replace("?", ""),
        d = Bf(c, "_gl", !0) || "";
      a.query = gh(d) || {};
      var e = Ef(b, "fragment").match(ch("_gl"));
      a.fragment = gh((e && e[3]) || "") || {};
    };
  }
  var hh = function (a) {
      var b = fh(),
        c = Vg();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Ma(d, e.query), a && Ma(d, e.fragment));
      return d;
    },
    gh = function (a) {
      var b;
      b = void 0 === b ? 3 : b;
      try {
        if (a) {
          var c;
          a: {
            for (var d = a, e = 0; 3 > e; ++e) {
              var f = Zg.exec(d);
              if (f) {
                c = f;
                break a;
              }
              d = decodeURIComponent(d);
            }
            c = void 0;
          }
          var g = c;
          if (g && "1" === g[1]) {
            var k = g[3],
              m;
            a: {
              for (var n = g[2], p = 0; p < b; ++p)
                if (n === dh(k, p)) {
                  m = !0;
                  break a;
                }
              m = !1;
            }
            if (m) {
              for (var r = {}, u = k ? k.split("*") : [], t = 0; t + 1 < u.length; t += 2) {
                var q = u[t],
                  v = Rg(u[t + 1]);
                r[q] = v;
              }
              gd("TAGGING", 6);
              return r;
            }
            gd("TAGGING", 7);
          }
        }
      } catch (y) {
        gd("TAGGING", 8);
      }
    };
  function ih(a, b, c, d) {
    function e(p) {
      var r = p,
        u = ch(a).exec(r),
        t = r;
      if (u) {
        var q = u[2],
          v = u[4];
        t = u[1];
        v && (t = t + q + v);
      }
      p = t;
      var y = p.charAt(p.length - 1);
      p && "&" !== y && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = bh.exec(c);
    if (!f) return "";
    var g = f[1],
      k = f[2] || "",
      m = f[3] || "",
      n = a + "=" + b;
    d ? (m = "#" + e(m.substring(1))) : (k = "?" + e(k.substring(1)));
    return "" + g + k + m;
  }
  function jh(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = Yg(b, 1, c),
      e = Yg(b, 2, c),
      f = Yg(b, 3, c);
    if (Na(d)) {
      var g = eh(d);
      c ? kh("_gl", g, a) : lh("_gl", g, a, !1);
    }
    if (!c && Na(e)) {
      var k = eh(e);
      lh("_gl", k, a, !0);
    }
    for (var m in f)
      if (f.hasOwnProperty(m))
        a: {
          var n = m,
            p = f[m],
            r = a;
          if (r.tagName) {
            if ("a" === r.tagName.toLowerCase()) {
              lh(n, p, r, void 0);
              break a;
            }
            if ("form" === r.tagName.toLowerCase()) {
              kh(n, p, r);
              break a;
            }
          }
          "string" == typeof r && ih(n, p, r, void 0);
        }
  }
  function lh(a, b, c, d) {
    if (c.href) {
      var e = ih(a, b, c.href, void 0 === d ? !1 : d);
      Xa.test(e) && (c.href = e);
    }
  }
  function kh(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var k = e[g];
          if (k.name === a) {
            k.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var m = F.createElement("input");
          m.setAttribute("type", "hidden");
          m.setAttribute("name", a);
          m.setAttribute("value", b);
          c.appendChild(m);
        }
      } else if ("post" === d) {
        var n = ih(a, b, c.action);
        Xa.test(n) && (c.action = n);
      }
    }
  }
  function Tg(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || jh(e, e.hostname);
      }
    } catch (g) {}
  }
  function Ug(a) {
    try {
      if (a.action) {
        var b = Ef(Gf(a.action), "host");
        jh(a, b);
      }
    } catch (c) {}
  }
  var mh = function (a, b, c, d) {
      Wg();
      Xg(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    nh = function (a, b) {
      Wg();
      Xg(a, [Df(B.location, "host", !0)], b, !0, !0);
    },
    oh = function () {
      var a = F.location.hostname,
        b = $g.exec(F.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var k = a.replace(ah, ""),
        m = e.replace(ah, ""),
        n;
      if (!(n = k === m)) {
        var p = "." + m;
        n = k.substring(k.length - p.length, k.length) === p;
      }
      return n;
    },
    ph = function (a, b) {
      return !1 === a ? !1 : a || b || oh();
    };
  var qh = {};
  var rh = /^\w+$/,
    sh = /^[\w-]+$/,
    th = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    uh = function () {
      if (!Yd().m() || !ie()) return !0;
      var a = fe("ad_storage");
      return null == a ? !0 : !!a;
    },
    vh = function (a, b) {
      he("ad_storage")
        ? uh()
          ? a()
          : ne(a, "ad_storage")
        : b
        ? gd("TAGGING", 3)
        : me(
            function () {
              vh(a, !0);
            },
            ["ad_storage"]
          );
    },
    xh = function (a) {
      return wh(a).map(function (b) {
        return b.sa;
      });
    },
    wh = function (a) {
      var b = [];
      if (!ig(B) || !F.cookie) return b;
      var c = lg(a, F.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { Gc: d.Gc }, e++) {
        var f = yh(c[e]);
        if (null != f) {
          var g = f,
            k = g.version;
          d.Gc = g.sa;
          var m = g.timestamp,
            n = g.labels,
            p = wa(
              b,
              (function (r) {
                return function (u) {
                  return u.sa === r.Gc;
                };
              })(d)
            );
          p ? ((p.timestamp = Math.max(p.timestamp, m)), (p.labels = zh(p.labels, n || []))) : b.push({ version: k, sa: d.Gc, timestamp: m, labels: n });
        }
      }
      b.sort(function (r, u) {
        return u.timestamp - r.timestamp;
      });
      return Ah(b);
    };
  function zh(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++) (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Bh(a) {
    return a && "string" == typeof a && a.match(rh) ? a : "_gcl";
  }
  var Dh = function () {
      var a = Gf(B.location.href),
        b = Ef(a, "query", !1, void 0, "gclid"),
        c = Ef(a, "query", !1, void 0, "gclsrc"),
        d = Ef(a, "query", !1, void 0, "wbraid"),
        e = Ef(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || Bf(f, "gclid", void 0);
        c = c || Bf(f, "gclsrc", void 0);
        d = d || Bf(f, "wbraid", void 0);
      }
      return Ch(b, c, e, d);
    },
    Ch = function (a, b, c, d) {
      var e = {},
        f = function (g, k) {
          e[k] || (e[k] = []);
          e[k].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && sh.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(sh))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    Fh = function (a) {
      var b = Dh();
      vh(function () {
        Eh(b, !1, a);
      });
    };
  function Eh(a, b, c, d, e) {
    function f(y, A) {
      var w = Gh(y, g);
      w && (ug(w, A, k), (m = !0));
    }
    c = c || {};
    e = e || [];
    var g = Bh(c.prefix);
    d = d || Ja();
    var k = Dg(c, d, !0);
    k.Ra = "ad_storage";
    var m = !1,
      n = Math.round(d / 1e3),
      p = function (y) {
        var A = ["GCL", n, y];
        0 < e.length && A.push(e.join("."));
        return A.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if ((void 0 == qh.enable_gbraid_cookie_write ? 0 : qh.enable_gbraid_cookie_write) && !m && a.gb) {
      var r = a.gb[0],
        u = Gh("gb", g),
        t = !1;
      if (!b) for (var q = wh(u), v = 0; v < q.length; v++) q[v].sa === r && q[v].labels && 0 < q[v].labels.length && (t = !0);
      t || f("gb", p(r));
    }
  }
  var Ih = function (a, b) {
      var c = hh(!0);
      vh(function () {
        for (var d = Bh(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== th[f]) {
            var g = Gh(f, d),
              k = c[g];
            if (k) {
              var m = Math.min(Hh(k), Ja()),
                n;
              b: {
                var p = m;
                if (ig(B))
                  for (var r = lg(g, F.cookie, void 0, "ad_storage"), u = 0; u < r.length; ++u)
                    if (Hh(r[u]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var t = Dg(b, m, !0);
                t.Ra = "ad_storage";
                ug(g, k, t);
              }
            }
          }
        }
        Eh(Ch(c.gclid, c.gclsrc), !1, b);
      });
    },
    Gh = function (a, b) {
      var c = th[a];
      if (void 0 !== c) return b + c;
    },
    Hh = function (a) {
      return 0 !== Jh(a.split(".")).length ? 1e3 * (Number(a.split(".")[1]) || 0) : 0;
    };
  function yh(a) {
    var b = Jh(a.split("."));
    return 0 === b.length ? null : { version: b[0], sa: b[2], timestamp: 1e3 * (Number(b[1]) || 0), labels: b.slice(3) };
  }
  function Jh(a) {
    return 3 > a.length || ("GCL" !== a[0] && "1" !== a[0]) || !/^\d+$/.test(a[1]) || !sh.test(a[2]) ? [] : a;
  }
  var Kh = function (a, b, c, d, e) {
      if (ua(b) && ig(B)) {
        var f = Bh(e),
          g = function () {
            for (var k = {}, m = 0; m < a.length; ++m) {
              var n = Gh(a[m], f);
              if (n) {
                var p = lg(n, F.cookie, void 0, "ad_storage");
                p.length && (k[n] = p.sort()[p.length - 1]);
              }
            }
            return k;
          };
        vh(function () {
          mh(g, b, c, d);
        });
      }
    },
    Ah = function (a) {
      return a.filter(function (b) {
        return sh.test(b.sa);
      });
    },
    Lh = function (a, b) {
      if (ig(B)) {
        for (var c = Bh(b.prefix), d = {}, e = 0; e < a.length; e++) th[a[e]] && (d[a[e]] = th[a[e]]);
        vh(function () {
          Ba(d, function (f, g) {
            var k = lg(c + g, F.cookie, void 0, "ad_storage");
            k.sort(function (t, q) {
              return Hh(q) - Hh(t);
            });
            if (k.length) {
              var m = k[0],
                n = Hh(m),
                p = 0 !== Jh(m.split(".")).length ? m.split(".").slice(3) : [],
                r = {},
                u;
              u = 0 !== Jh(m.split(".")).length ? m.split(".")[2] : void 0;
              r[f] = [u];
              Eh(r, !0, b, n, p);
            }
          });
        });
      }
    };
  function Mh(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Nh = function (a) {
    function b(e, f, g) {
      g && (e[f] = g);
    }
    if (ie()) {
      var c = Dh();
      if (Mh(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.gbraid);
        nh(function () {
          return d;
        }, 3);
        nh(function () {
          var e = {};
          return (e._up = "1"), e;
        }, 1);
      }
    }
  };
  function Oh(a, b) {
    var c = Bh(b),
      d = Gh(a, c);
    if (!d) return 0;
    for (var e = wh(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Ph(a) {
    var b = 0,
      c;
    for (c in a) for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var ki = !1,
    li = 0,
    mi = [];
  function ni(a) {
    if (!ki) {
      var b = F.createEventObject,
        c = "complete" == F.readyState,
        d = "interactive" == F.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        ki = !0;
        for (var e = 0; e < mi.length; e++) H(mi[e]);
      }
      mi.push = function () {
        for (var f = 0; f < arguments.length; f++) H(arguments[f]);
        return 0;
      };
    }
  }
  function oi() {
    if (!ki && 140 > li) {
      li++;
      try {
        F.documentElement.doScroll("left"), ni();
      } catch (a) {
        B.setTimeout(oi, 50);
      }
    }
  }
  var pi = function (a) {
    ki ? a() : mi.push(a);
  };
  var ri = function (a, b) {
      this.m = !1;
      this.D = [];
      this.K = { tags: [] };
      this.Z = !1;
      this.o = this.s = 0;
      qi(this, a, b);
    },
    si = function (a, b, c, d) {
      if (ld.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Ib(d) && (e = K(d, e));
      e.id = c;
      e.status = "timeout";
      return a.K.tags.push(e) - 1;
    },
    ti = function (a, b, c, d) {
      var e = a.K.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    ui = function (a) {
      if (!a.m) {
        for (var b = a.D, c = 0; c < b.length; c++) b[c]();
        a.m = !0;
        a.D.length = 0;
      }
    },
    qi = function (a, b, c) {
      sa(b) && vi(a, b);
      c &&
        B.setTimeout(function () {
          return ui(a);
        }, Number(c));
    },
    vi = function (a, b) {
      var c = La(function () {
        return H(function () {
          b(R.H, a.K);
        });
      });
      a.m ? c() : a.D.push(c);
    },
    wi = function (a) {
      a.s++;
      return La(function () {
        a.o++;
        a.Z && a.o >= a.s && ui(a);
      });
    };
  var xi = function () {
      function a(d) {
        return !ta(d) || 0 > d ? 0 : d;
      }
      if (!U._li && B.performance && B.performance.timing) {
        var b = B.performance.timing.navigationStart,
          c = ta(Fd.get("gtm.start")) ? Fd.get("gtm.start") : 0;
        U._li = { cst: a(c - b), cbt: a(rd - b) };
      }
    },
    yi = function (a) {
      B.performance && B.performance.mark(R.H + "_" + a + "_start");
    },
    zi = function (a) {
      if (B.performance) {
        var b = R.H + "_" + a + "_start",
          c = R.H + "_" + a + "_duration";
        B.performance.measure(c, b);
        var d = B.performance.getEntriesByName(c)[0];
        B.performance.clearMarks(b);
        B.performance.clearMeasures(c);
        var e = U._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (U._p = e));
        return d.duration;
      }
    },
    Ai = function () {
      if (B.performance && B.performance.now) {
        var a = U._p || {};
        a.PAGEVIEW = B.performance.now();
        U._p = a;
      }
    };
  var Bi = {},
    Ci = function () {
      return B.GoogleAnalyticsObject && B[B.GoogleAnalyticsObject];
    },
    Di = !1;
  var Ei = function (a) {
      B.GoogleAnalyticsObject || (B.GoogleAnalyticsObject = a || "ga");
      var b = B.GoogleAnalyticsObject;
      if (B[b]) B.hasOwnProperty(b) || id(12);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Ia());
        B[b] = c;
      }
      xi();
      return B[b];
    },
    Fi = function (a) {
      if (ie()) {
        var b = Ci();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function Gi() {
    return B.GoogleAnalyticsObject || "ga";
  }
  var Hi = function (a) {},
    Ii = function (a, b) {
      return function () {
        var c = Ci(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              k = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
            e(f);
            m && (f.set("hitPayload", g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f));
          });
        }
      };
    };
  var Zi = function (a) {},
    cj = function (a) {},
    dj = function () {
      return (
        "&tc=" +
        kc.filter(function (a) {
          return a;
        }).length
      );
    },
    gj = function () {
      2022 <= ej().length && fj();
    },
    hj = function (a) {
      return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*";
    },
    jj = function () {
      ij || (ij = B.setTimeout(fj, 500));
    },
    fj = function () {
      ij && (B.clearTimeout(ij), (ij = void 0));
      void 0 === kj || (lj[kj] && !mj && !nj) || (oj[kj] || pj.Ii() || 0 >= qj-- ? (id(1), (oj[kj] = !0)) : (pj.cj(), ub(ej(!0)), (lj[kj] = !0), (rj = sj = tj = nj = mj = "")));
    },
    ej = function (a) {
      var b = kj;
      if (void 0 === b) return "";
      var c = hd("GTM"),
        d = hd("TAGGING");
      return [uj, lj[b] ? "" : "&es=1", vj[b], Zi(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", dj(), mj, nj, tj, sj, cj(a), rj, "&z=0"].join("");
    },
    xj = function () {
      uj = wj();
    },
    wj = function () {
      return [sd, "&v=3&t=t", "&pid=" + xa(), "&rv=" + R.bd].join("");
    },
    bj = ["L", "S", "Y"],
    Oi = ["S", "E"],
    yj = { sampleRate: "0.005000", Wg: "", Vg: Number("5") },
    zj = 0 <= F.location.search.indexOf("?gtm_latency=") || 0 <= F.location.search.indexOf("&gtm_latency="),
    Aj;
  if (!(Aj = zj)) {
    var Bj = Math.random(),
      Cj = yj.sampleRate;
    Aj = Bj < Cj;
  }
  var Dj = Aj,
    Ej = { label: R.H + " Container", children: [{ label: "Initialization", children: [] }] },
    uj = wj(),
    lj = {},
    mj = "",
    nj = "",
    rj = "",
    sj = "",
    aj = {},
    $i = !1,
    Ni = {},
    Fj = {},
    tj = "",
    kj = void 0,
    vj = {},
    oj = {},
    ij = void 0,
    Gj = 5;
  0 < yj.Vg && (Gj = yj.Vg);
  var pj = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        Ii: function () {
          return c < a ? !1 : Ja() - d[c % a] < b;
        },
        cj: function () {
          var f = c++ % a;
          d[f] = Ja();
        },
      };
    })(Gj, 1e3),
    qj = 1e3,
    Ij = function (a, b) {
      if (Dj && !oj[a] && kj !== a) {
        fj();
        kj = a;
        rj = mj = "";
        vj[a] = "&e=" + hj(b) + "&eid=" + a;
        jj();
      }
    },
    Jj = function (a, b, c, d) {
      if (Dj && b) {
        var e,
          f = String(b[Kb.ob] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var g = c + e;
        if (!oj[a]) {
          a !== kj && (fj(), (kj = a));
          mj = mj ? mj + "." + g : "&tr=" + g;
          var k = b["function"];
          if (!k) throw Error("Error: No function name given for function call.");
          var m = (mc[k] ? "1" : "2") + e;
          rj = rj ? rj + "." + m : "&ti=" + m;
          jj();
          gj();
        }
      }
    };
  var Qj = function (a, b, c) {
      if (Dj && !oj[a]) {
        a !== kj && (fj(), (kj = a));
        var d = c + b;
        nj = nj ? nj + "." + d : "&epr=" + d;
        jj();
        gj();
      }
    },
    Rj = function (a, b, c) {};
  function Sj(a, b, c, d) {
    var e = kc[a],
      f = Tj(a, b, c, d);
    if (!f) return null;
    var g = rc(e[Kb.Sf], c, []);
    if (g && g.length) {
      var k = g[0];
      f = Sj(k.index, { onSuccess: f, onFailure: 1 === k.kg ? b.terminate : f, terminate: b.terminate }, c, d);
    }
    return f;
  }
  function Tj(a, b, c, d) {
    function e() {
      if (f[Kb.Oh]) k();
      else {
        var y = sc(f, c, []);
        var A = y[Kb.$g];
        if (null != A)
          for (var w = 0; w < A.length; w++)
            if (!xe(A[w])) {
              k();
              return;
            }
        var z = si(c.pb, String(f[Kb.ob]), Number(f[Kb.Uf]), y[Kb.Ph]),
          x = !1;
        y.vtp_gtmOnSuccess = function () {
          if (!x) {
            x = !0;
            var D = Ja() - E;
            Jj(c.id, kc[a], "5", D);
            ti(c.pb, z, "success", D);
            g();
          }
        };
        y.vtp_gtmOnFailure = function () {
          if (!x) {
            x = !0;
            var D = Ja() - E;
            Jj(c.id, kc[a], "6", D);
            ti(c.pb, z, "failure", D);
            k();
          }
        };
        y.vtp_gtmTagId = f.tag_id;
        y.vtp_gtmEventId = c.id;
        Jj(c.id, f, "1");
        var C = function () {
          var D = Ja() - E;
          Jj(c.id, f, "7", D);
          ti(c.pb, z, "exception", D);
          x || ((x = !0), k());
        };
        var E = Ja();
        try {
          qc(y, { event: c, index: a, type: 1 });
        } catch (D) {
          C(D);
        }
      }
    }
    var f = kc[a],
      g = b.onSuccess,
      k = b.onFailure,
      m = b.terminate;
    if (c.Je(f)) return null;
    var n = rc(f[Kb.Vf], c, []);
    if (n && n.length) {
      var p = n[0],
        r = Sj(p.index, { onSuccess: g, onFailure: k, terminate: m }, c, d);
      if (!r) return null;
      g = r;
      k = 2 === p.kg ? m : r;
    }
    if (f[Kb.Nf] || f[Kb.Th]) {
      var u = f[Kb.Nf] ? lc : c.pj,
        t = g,
        q = k;
      if (!u[a]) {
        e = La(e);
        var v = Uj(a, u, e);
        g = v.onSuccess;
        k = v.onFailure;
      }
      return function () {
        u[a](t, q);
      };
    }
    return e;
  }
  function Uj(a, b, c) {
    var d = [],
      e = [];
    b[a] = Vj(d, e, c);
    return {
      onSuccess: function () {
        b[a] = Wj;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = Xj;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function Vj(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Wj(a) {
    a();
  }
  function Xj(a, b) {
    b();
  }
  var ak = function (a, b) {
    for (var c = [], d = 0; d < kc.length; d++)
      if (a[d]) {
        var e = kc[d];
        var f = wi(b.pb);
        try {
          var g = Sj(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var k = c,
              m = k.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var r = mc[p];
            m.call(k, { Og: n, Eg: r ? r.priorityOverride || 0 : 0, execute: g });
          } else Yj(d, b), f();
        } catch (q) {
          f();
        }
      }
    var u = b.pb;
    u.Z = !0;
    u.o >= u.s && ui(u);
    c.sort(Zj);
    for (var t = 0; t < c.length; t++) c[t].execute();
    return 0 < c.length;
  };
  function Zj(a, b) {
    var c,
      d = b.Eg,
      e = a.Eg;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Og,
        k = b.Og;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function Yj(a, b) {
    if (!Dj) return;
    var c = function (d) {
      var e = b.Je(kc[d]) ? "3" : "4",
        f = rc(kc[d][Kb.Sf], b, []);
      f && f.length && c(f[0].index);
      Jj(b.id, kc[d], e);
      var g = rc(kc[d][Kb.Vf], b, []);
      g && g.length && c(g[0].index);
    };
    c(a);
  }
  var bk = !1;
  var hk = function (a) {
    var b = Ja(),
      c = a["gtm.uniqueEventId"],
      d = a.event;
    if ("gtm.js" === d) {
      if (bk) return !1;
      bk = !0;
    }
    var g = Ud(c),
      k = !1;
    if (!g.active) {
      if ("gtm.js" !== d) return !1;
      k = !0;
      g = Ud(Number.MAX_SAFE_INTEGER);
    }
    Ij(c, d);
    var m = a.eventCallback,
      n = a.eventTimeout,
      p = m;
    var r = {
      id: c,
      name: d,
      Je: Sd(g.isAllowed),
      pj: [],
      yg: function () {
        id(6);
      },
      eg: ck(),
      fg: dk(c),
      pb: new ri(p, n),
    };
    ek(c, r.pb);
    var u = wc(r);
    k && (u = fk(u));
    var t = ak(u, r);
    ("gtm.js" !== d && "gtm.sync" !== d) || Hi(R.H);
    return gk(u, t);
  };
  function dk(a) {
    return function (b) {
      Dj && (Jb(b) || Rj(a, "input", b));
    };
  }
  function ek(a, b) {
    Jd(a, "event", 1);
    Jd(a, "ecommerce", 1);
    Jd(a, "gtm");
    Jd(a, "eventModel");
  }
  function ck() {
    var a = {};
    a.event = Id("event", 1);
    a.ecommerce = Id("ecommerce", 1);
    a.gtm = Id("gtm");
    a.eventModel = Id("eventModel");
    return a;
  }
  function fk(a) {
    for (var b = [], c = 0; c < a.length; c++) a[c] && kd[String(kc[c][Kb.ob])] && (b[c] = !0);
    return b;
  }
  function gk(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++) if (a[c] && kc[c] && !ld[String(kc[c][Kb.ob])]) return !0;
    return !1;
  }
  function ik(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Gf("" + c + b).href;
    }
  }
  function jk(a, b) {
    return kk() ? ik(a, b) : void 0;
  }
  function kk() {
    var a = !1;
    return a;
  }
  function lk() {
    return !!R.cd && "SGTM_TOKEN" !== R.cd.replaceAll("@@", "");
  }
  var mk = function () {
    var a = !1;
    return a;
  };
  var nk;
  if (3 === R.bd.length) nk = "g";
  else {
    var ok = "G";
    nk = ok;
  }
  var pk = { "": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: nk, OPT: "o" },
    qk = function (a) {
      var b = R.H.split("-"),
        c = b[0].toUpperCase(),
        d = pk[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f;
      if (3 === R.bd.length) {
        var g = "w";
        f = "2" + g;
      } else f = "";
      return f + d + R.bd + e;
    };
  function rk(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var sk = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1);
  };
  function tk() {
    return Za("iPhone") && !Za("iPod") && !Za("iPad");
  }
  Za("Opera");
  Za("Trident") || Za("MSIE");
  Za("Edge");
  !Za("Gecko") || (-1 != Ya().toLowerCase().indexOf("webkit") && !Za("Edge")) || Za("Trident") || Za("MSIE") || Za("Edge");
  -1 != Ya().toLowerCase().indexOf("webkit") && !Za("Edge") && Za("Mobile");
  Za("Macintosh");
  Za("Windows");
  Za("Linux") || Za("CrOS");
  var uk = na.navigator || null;
  uk && (uk.appVersion || "").indexOf("X11");
  Za("Android");
  tk();
  Za("iPad");
  Za("iPod");
  tk() || Za("iPad") || Za("iPod");
  Ya().toLowerCase().indexOf("kaios");
  var vk = function (a) {
    if (!a || !F.head) return null;
    var b, c;
    c = void 0 === c ? document : c;
    b = c.createElement("meta");
    F.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  };
  var wk = function () {};
  var xk = function (a) {
      void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) || (void 0 !== a.listenerId && "number" !== typeof a.listenerId) ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3;
    },
    yk = function (a, b) {
      this.o = a;
      this.m = null;
      this.D = {};
      this.Z = 0;
      this.K = void 0 === b ? 500 : b;
      this.s = null;
    };
  ma(yk, wk);
  yk.prototype.addEventListener = function (a) {
    var b = {},
      c = fb(function () {
        return a(b);
      }),
      d = 0;
    -1 !== this.K &&
      (d = setTimeout(function () {
        b.tcString = "tcunavailable";
        b.internalErrorState = 1;
        c();
      }, this.K));
    var e = function (f, g) {
      clearTimeout(d);
      f ? ((b = f), (b.internalErrorState = xk(b)), (g && 0 === b.internalErrorState) || ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3))) : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
      a(b);
    };
    try {
      zk(this, "addEventListener", e);
    } catch (f) {
      (b.tcString = "tcunavailable"), (b.internalErrorState = 3), d && (clearTimeout(d), (d = 0)), c();
    }
  };
  yk.prototype.removeEventListener = function (a) {
    a && a.listenerId && zk(this, "removeEventListener", null, a.listenerId);
  };
  var Bk = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var k = c;
      2 === c ? ((k = 0), 2 === g && (k = 1)) : 3 === c && ((k = 1), 1 === g && (k = 0));
      var m;
      if (0 === k)
        if (a.purpose && a.vendor) {
          var n = Ak(a.vendor.consents, void 0 === d ? "755" : d);
          m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Ak(a.purpose.consents, b);
        } else m = !0;
      else m = 1 === k ? (a.purpose && a.vendor ? Ak(a.purpose.legitimateInterests, b) && Ak(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0) : !0;
      return m;
    },
    Ak = function (a, b) {
      return !(!a || !a[b]);
    },
    zk = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.o.__tcfapi) {
        var e = a.o.__tcfapi;
        e(b, 2, c, d);
      } else if (Ck(a)) {
        Dk(a);
        var f = ++a.Z;
        a.D[f] = c;
        if (a.m) {
          var g = {};
          a.m.postMessage(((g.__tcfapiCall = { command: b, version: 2, callId: f, parameter: d }), g), "*");
        }
      } else c({}, !1);
    },
    Ck = function (a) {
      if (a.m) return a.m;
      var b;
      a: {
        for (var c = a.o, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (k) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (k) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.m = b;
      return a.m;
    },
    Dk = function (a) {
      a.s ||
        ((a.s = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
            a.D[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        sk(a.o, a.s));
    };
  var Ek = !0;
  Ek = !1;
  var Fk = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    Gk = rk("", 550),
    Hk = rk("", 500);
  function Ik() {
    var a = U.tcf || {};
    return (U.tcf = a);
  }
  var Nk = function () {
    var a = Ik(),
      b = new yk(B, Ek ? 3e3 : -1);
    if (!0 === B.gtag_enable_tcf_support && !a.active && ("function" === typeof B.__tcfapi || "function" === typeof b.o.__tcfapi || null != Ck(b))) {
      a.active = !0;
      a.Bc = {};
      Jk();
      var c = null;
      Ek
        ? (c = B.setTimeout(function () {
            Kk(a);
            Lk(a);
            c = null;
          }, Hk))
        : (a.tcString = "tcunavailable");
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), (c = null));
          if (0 !== d.internalErrorState) Kk(a), Lk(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) (e = Mk()), b.removeEventListener(d);
            else if ("tcloaded" === d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
              var f = {},
                g;
              for (g in Fk)
                if (Fk.hasOwnProperty(g))
                  if ("1" === g) {
                    var k = d,
                      m = !0;
                    m = void 0 === m ? !1 : m;
                    var n;
                    var p = k;
                    !1 === p.gdprApplies ? (n = !0) : (void 0 === p.internalErrorState && (p.internalErrorState = xk(p)), (n = "error" === p.cmpStatus || 0 !== p.internalErrorState || ("loaded" === p.cmpStatus && ("tcloaded" === p.eventStatus || "useractioncomplete" === p.eventStatus)) ? !0 : !1));
                    f["1"] = n ? (!1 === k.gdprApplies || "tcunavailable" === k.tcString || (void 0 === k.gdprApplies && !m) || "string" !== typeof k.tcString || !k.tcString.length ? !0 : Bk(k, "1", 0)) : !1;
                  } else f[g] = Bk(d, g, Fk[g]);
              e = f;
            }
            e && ((a.tcString = d.tcString || "tcempty"), (a.Bc = e), Lk(a));
          }
        });
      } catch (d) {
        c && (clearTimeout(c), (c = null)), Kk(a), Lk(a);
      }
    }
  };
  function Kk(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    Ek && (a.Bc = Mk());
  }
  function Jk() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = Gk), a);
    ue(b);
  }
  function Mk() {
    var a = {},
      b;
    for (b in Fk) Fk.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function Lk(a) {
    var b = {},
      c = ((b.ad_storage = a.Bc["1"] ? "granted" : "denied"), b);
    we(c, 0, { gdprApplies: a ? a.gdprApplies : void 0, tcString: Ok() });
  }
  var Ok = function () {
      var a = Ik();
      return a.active ? a.tcString || "" : "";
    },
    Pk = function () {
      var a = Ik();
      return a.active && void 0 !== a.gdprApplies ? (a.gdprApplies ? "1" : "0") : "";
    },
    Qk = function (a) {
      if (!Fk.hasOwnProperty(String(a))) return !0;
      var b = Ik();
      return b.active && b.Bc ? !!b.Bc[String(a)] : !0;
    };
  var Xk = !1;
  var Yk = function () {
      this.m = {};
    },
    Zk = function (a, b, c) {
      null != c && (a.m[b] = c);
    },
    $k = function (a) {
      return Object.keys(a.m)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.m[b]);
        })
        .join("&");
    },
    bl = function (a, b, c, d, e) {};
  var dl = /[A-Z]+/,
    el = /\s/,
    fl = function (a) {
      if (l(a)) {
        a = Ha(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (dl.test(c)) {
            for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++) if (!d[e] || (el.test(d[e]) && ("AW" !== c || 1 !== e))) return;
            return { id: a, prefix: c, containerId: c + "-" + d[0], M: d };
          }
        }
      }
    },
    hl = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = fl(a[c]);
        d && (b[d.id] = d);
      }
      gl(b);
      var e = [];
      Ba(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function gl(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.M[1] && b.push(d.containerId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var jl = function (a, b, c, d) {
      return (2 === il() || d || "http:" != B.location.protocol ? a : b) + c;
    },
    il = function () {
      var a = pb(),
        b;
      if (1 === a)
        a: {
          var c = nd;
          c = c.toLowerCase();
          for (var d = "https://" + c, e = "http://" + c, f = 1, g = F.getElementsByTagName("script"), k = 0; k < g.length && 100 > k; k++) {
            var m = g[k].src;
            if (m) {
              m = m.toLowerCase();
              if (0 === m.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === m.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var ll = function (a, b, c) {
      if (B[a.functionName]) return b.Pe && H(b.Pe), B[a.functionName];
      var d = kl();
      B[a.functionName] = d;
      if (a.gd) for (var e = 0; e < a.gd.length; e++) B[a.gd[e]] = B[a.gd[e]] || kl();
      a.sd && void 0 === B[a.sd] && (B[a.sd] = c);
      ob(jl("https://", "http://", a.Ve), b.Pe, b.Ti);
      return d;
    },
    kl = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    ml = { functionName: "_googWcmImpl", sd: "_googWcmAk", Ve: "www.gstatic.com/wcm/loader.js" },
    nl = { functionName: "_gaPhoneImpl", sd: "ga_wpid", Ve: "www.gstatic.com/gaphone/loader.js" },
    ol = { Zg: "", Uh: "5" },
    pl = { functionName: "_googCallTrackingImpl", gd: [nl.functionName, ml.functionName], Ve: "www.gstatic.com/call-tracking/call-tracking_" + (ol.Zg || ol.Uh) + ".js" },
    ql = {},
    rl = function (a, b, c, d) {
      id(22);
      if (c) {
        d = d || {};
        var e = ll(ml, d, a),
          f = { ak: a, cl: b };
        void 0 === d.Qa && (f.autoreplace = c);
        e(2, d.Qa, f, c, 0, Ia(), d.options);
      }
    },
    sl = function (a, b, c, d) {
      id(21);
      if (b && c) {
        d = d || {};
        for (var e = { countryNameCode: c, destinationNumber: b, retrievalTime: Ia() }, f = 0; f < a.length; f++) {
          var g = a[f];
          ql[g.id] || (g && "AW" === g.prefix && !e.adData && 2 <= g.M.length ? ((e.adData = { ak: g.M[0], cl: g.M[1] }), (ql[g.id] = !0)) : g && "UA" === g.prefix && !e.gaData && ((e.gaData = { gaWpid: g.containerId }), (ql[g.id] = !0)));
        }
        (e.gaData || e.adData) && ll(pl, d)(d.Qa, e, d.options);
      }
    },
    tl = function () {
      var a = !1;
      return a;
    },
    ul = function (a, b) {
      if (a)
        if (mk()) {
        } else {
          if (l(a)) {
            var c = fl(a);
            if (!c) return;
            a = c;
          }
          var d = void 0,
            e = !1,
            f = b.getWithConfig(O.Ch);
          if (f && ua(f)) {
            d = [];
            for (var g = 0; g < f.length; g++) {
              var k = fl(f[g]);
              k && (d.push(k), (a.id === k.id || (a.id === a.containerId && a.containerId === k.containerId)) && (e = !0));
            }
          }
          if (!d || e) {
            var m = b.getWithConfig(O.Ef),
              n;
            if (m) {
              ua(m) ? (n = m) : (n = [m]);
              var p = b.getWithConfig(O.Cf),
                r = b.getWithConfig(O.Df),
                u = b.getWithConfig(O.Ff),
                t = b.getWithConfig(O.Bh),
                q = p || r,
                v = 1;
              "UA" !== a.prefix || d || (v = 5);
              for (var y = 0; y < n.length; y++)
                if (y < v)
                  if (d) sl(d, n[y], t, { Qa: q, options: u });
                  else if ("AW" === a.prefix && a.M[1]) tl() ? sl([a], n[y], t || "US", { Qa: q, options: u }) : rl(a.M[0], a.M[1], n[y], { Qa: q, options: u });
                  else if ("UA" === a.prefix)
                    if (tl()) sl([a], n[y], t || "US", { Qa: q });
                    else {
                      var A = a.containerId,
                        w = n[y],
                        z = { Qa: q };
                      id(23);
                      if (w) {
                        z = z || {};
                        var x = ll(nl, z, A),
                          C = {};
                        void 0 !== z.Qa ? (C.receiver = z.Qa) : (C.replace = w);
                        C.ga_wpid = A;
                        C.destination = w;
                        x(2, Ia(), C);
                      }
                    }
            }
          }
        }
    };
  var Cl = !1;
  function Dl() {
    if (sa(hb.joinAdInterestGroup)) return !0;
    Cl || (vk(""), (Cl = !0));
    return sa(hb.joinAdInterestGroup);
  }
  function El(a, b) {
    var c = void 0;
    try {
      c = F.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Ja() - d) {
        gd("TAGGING", 9);
        return;
      }
    } else
      try {
        if (50 <= F.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
          gd("TAGGING", 10);
          return;
        }
      } catch (e) {}
    tb(a, void 0, { allow: "join-ad-interest-group" }, { taggingId: b, loadTime: Ja() }, c);
  }
  var Bm = function () {
      var a = !0;
      (Qk(7) && Qk(9) && Qk(10)) || (a = !1);
      var b = !0;
      b = !1;
      b && !Am() && (a = !1);
      return a;
    },
    Am = function () {
      var a = !0;
      (Qk(3) && Qk(4)) || (a = !1);
      return a;
    };
  var Fm = function (a, b) {},
    Gm = function (a, b) {
      var c = a[O.bc],
        d = b + ".",
        e = a[O.N] || "",
        f = void 0 === c ? !!a.use_anchor : "fragment" === c,
        g = !!a[O.Kb];
      e = String(e).replace(/\s+/g, "").split(",");
      var k = Ci();
      k(d + "require", "linker");
      k(d + "linker:autoLink", e, f, g);
    },
    Km = function (a, b, c) {
      if (ie() && (!c.isGtmEvent || !Hm[a])) {
        var d = !xe(O.J),
          e = function (f) {
            var g,
              k,
              m = Ci(),
              n = Im(b, "", c),
              p,
              r = n.createOnlyFields._useUp;
            if (c.isGtmEvent || Jm(b, n.createOnlyFields)) {
              var u = !0;
              if (c.isGtmEvent) {
                g = "gtm" + vd();
                k = n.createOnlyFields;
                n.gtmTrackerName && (k.name = g);
                u = !1;
                u = !0;
              }
              u &&
                m(function () {
                  var q = m.getByName(b);
                  q && (p = q.get("clientId"));
                  c.isGtmEvent || m.remove(b);
                });
              m("create", a, c.isGtmEvent ? k : n.createOnlyFields);
              d &&
                xe(O.J) &&
                ((d = !1),
                m(function () {
                  var q = Ci().getByName(c.isGtmEvent ? g : b);
                  !q || (q.get("clientId") == p && r) || (c.isGtmEvent ? ((n.fieldsToSet["&gcu"] = "1"), (n.fieldsToSet["&gcut"] = O.Bd[f])) : ((n.fieldsToSend["&gcu"] = "1"), (n.fieldsToSend["&gcut"] = O.Bd[f])), q.set(n.fieldsToSet), c.isGtmEvent ? q.send("pageview") : q.send("pageview", n.fieldsToSend));
                }));
              c.isGtmEvent &&
                m(function () {
                  m.remove(g);
                });
            }
          };
        Ae(function () {
          return e(O.J);
        }, O.J);
        Ae(function () {
          return e(O.C);
        }, O.C);
        c.isGtmEvent && (Hm[a] = !0);
      }
    },
    Lm = function (a, b) {
      lk() && b && (a[O.jb] = b);
    },
    Um = function (a, b, c) {
      function d() {
        var J = c.getWithConfig(O.$b);
        k(function () {
          if (!c.isGtmEvent && Ib(J)) {
            var I = q.fieldsToSend,
              N = m().getByName(n),
              P;
            for (P in J)
              if (J.hasOwnProperty(P) && /^(dimension|metric)\d+$/.test(P) && void 0 != J[P]) {
                var L = N.get(Em(J[P]));
                Mm(I, P, L);
              }
          }
        });
      }
      function e() {
        if (q.displayfeatures) {
          var J = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          p("require", "displayfeatures", void 0, { cookieName: J });
        }
      }
      var f = a,
        g = "https://www.google-analytics.com/analytics.js",
        k = c.isGtmEvent ? Ei(c.getWithConfig("gaFunctionName")) : Ei();
      if (sa(k)) {
        var m = Ci,
          n;
        c.isGtmEvent ? (n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName")) : (n = "gtag_" + f.split("-").join("_"));
        var p = function (J) {
            var I = [].slice.call(arguments, 0);
            I[0] = n ? n + "." + I[0] : "" + I[0];
            k.apply(window, I);
          },
          r = function (J) {
            var I = function (S, pa) {
                for (var va = 0; pa && va < pa.length; va++) p(S, pa[va]);
              },
              N = c.isGtmEvent,
              P = N ? Nm(q) : Om(b, c);
            if (P) {
              var L = {};
              Lm(L, J);
              p("require", "ec", "ec.js", L);
              N && P.ye && p("set", "&cu", P.ye);
              var T = P.action;
              if (N || "impressions" === T) if ((I("ec:addImpression", P.ug), !N)) return;
              if ("promo_click" === T || "promo_view" === T || (N && P.Ac)) {
                var ba = P.Ac;
                I("ec:addPromo", ba);
                if (ba && 0 < ba.length && "promo_click" === T) {
                  N ? p("ec:setAction", T, P.ab) : p("ec:setAction", T);
                  return;
                }
                if (!N) return;
              }
              "promo_view" !== T && "impressions" !== T && (I("ec:addProduct", P.vb), p("ec:setAction", T, P.ab));
            }
          },
          u = function (J) {
            if (J) {
              var I = {};
              if (Ib(J)) for (var N in Pm) Pm.hasOwnProperty(N) && Qm(Pm[N], N, J[N], I);
              Lm(I, A);
              p("require", "linkid", I);
            }
          },
          t = function () {
            if (mk()) {
            } else {
              var J = c.getWithConfig(O.Ah);
              J && (p("require", J, { dataLayer: R.V }), p("require", "render"));
            }
          },
          q = Im(n, b, c),
          v = function (J, I, N) {
            N && (I = "" + I);
            q.fieldsToSend[J] = I;
          };
        !c.isGtmEvent &&
          Jm(n, q.createOnlyFields) &&
          (k(function () {
            m() && m().remove(n);
          }),
          (Rm[n] = !1));
        k("create", f, q.createOnlyFields);
        if (q.createOnlyFields[O.jb] && !c.isGtmEvent) {
          var y = jk(q.createOnlyFields[O.jb], "/analytics.js");
          y && (g = y);
        }
        var A = c.isGtmEvent ? q.fieldsToSet[O.jb] : q.createOnlyFields[O.jb];
        if (A) {
          var w = c.isGtmEvent ? q.fieldsToSet[O.Oc] : q.createOnlyFields[O.Oc];
          w && !Rm[n] && ((Rm[n] = !0), k(Ii(n, w)));
        }
        c.isGtmEvent ? q.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), u(q.linkAttribution));
        var z = q[O.ka];
        z && z[O.N] && Gm(z, n);
        p("set", q.fieldsToSet);
        if (c.isGtmEvent) {
          if (q.enableLinkId) {
            var x = {};
            Lm(x, A);
            p("require", "linkid", "linkid.js", x);
          }
          ie() && Km(f, n, c);
        }
        if (b === O.Xb)
          if (c.isGtmEvent) {
            e();
            if (q.remarketingLists) {
              var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
              p("require", "adfeatures", { cookieName: C });
            }
            r(A);
            p("send", "pageview");
            q.createOnlyFields._useUp && Fi(n + ".");
          } else t(), p("send", "pageview", q.fieldsToSend);
        else b === O.ya ? (t(), ul(f, c), c.getWithConfig(O.Za) && (Nh(["aw", "dc"]), Fi(n + ".")), 0 != q.sendPageView && p("send", "pageview", q.fieldsToSend), Km(f, n, c), !c.isGtmEvent && 0 < nf(c).length && (id(68), 1 < U.configCount && id(69))) : b === O.Ka ? Fm(n, c) : "screen_view" === b ? p("send", "screenview", q.fieldsToSend) : "timing_complete" === b ? ((q.fieldsToSend.hitType = "timing"), v("timingCategory", q.eventCategory, !0), c.isGtmEvent ? v("timingVar", q.timingVar, !0) : v("timingVar", q.name, !0), v("timingValue", Ea(q.value)), void 0 !== q.eventLabel && v("timingLabel", q.eventLabel, !0), p("send", q.fieldsToSend)) : "exception" === b ? p("send", "exception", q.fieldsToSend) : ("" === b && c.isGtmEvent) || ("track_social" === b && c.isGtmEvent ? ((q.fieldsToSend.hitType = "social"), v("socialNetwork", q.socialNetwork, !0), v("socialAction", q.socialAction, !0), v("socialTarget", q.socialTarget, !0)) : ((c.isGtmEvent || Sm[b]) && r(A), c.isGtmEvent && e(), (q.fieldsToSend.hitType = "event"), v("eventCategory", q.eventCategory, !0), v("eventAction", q.eventAction || b, !0), void 0 !== q.eventLabel && v("eventLabel", q.eventLabel, !0), void 0 !== q.value && v("eventValue", Ea(q.value))), p("send", q.fieldsToSend));
        var E = !1;
        var D = Tm;
        E && (D = c.getContainerTypeLoaded("UA"));
        if (!D && !c.isGtmEvent) {
          Tm = !0;
          E && c.setContainerTypeLoaded("UA", !0);
          xi();
          var G = function () {
              E && c.setContainerTypeLoaded("UA", !1);
              c.onFailure();
            },
            Q = function () {
              m().loaded || G();
            };
          mk() ? H(Q) : ob(g, Q, G);
        }
      } else H(c.onFailure);
    },
    Vm = function (a, b, c, d) {
      Be(
        function () {
          Um(a, b, d);
        },
        [O.J, O.C]
      );
    },
    Xm = function (a, b) {
      function c(f) {
        function g(p, r) {
          for (var u = 0; u < r.length; u++) {
            var t = r[u];
            if (f[t]) {
              m[p] = f[t];
              break;
            }
          }
        }
        function k() {
          if (f.category) m.category = f.category;
          else {
            for (var p = "", r = 0; r < Wm.length; r++) void 0 !== f[Wm[r]] && (p && (p += "/"), (p += f[Wm[r]]));
            p && (m.category = p);
          }
        }
        var m = K(f),
          n = !1;
        if (n || b) g("id", ["id", "item_id", "promotion_id"]), g("name", ["name", "item_name", "promotion_name"]), g("brand", ["brand", "item_brand"]), g("variant", ["variant", "item_variant"]), g("list", ["list_name", "item_list_name"]), g("position", ["list_position", "creative_slot", "index"]), k();
        g("listPosition", ["list_position"]);
        g("creative", ["creative_name"]);
        g("list", ["list_name"]);
        g("position", ["list_position", "creative_slot"]);
        return m;
      }
      b = void 0 === b ? !1 : b;
      for (var d = [], e = 0; a && e < a.length; e++) a[e] && Ib(a[e]) && d.push(c(a[e]));
      return d.length ? d : void 0;
    },
    Ym = function (a) {
      return xe(a);
    },
    Zm = !1;
  var Tm,
    Rm = {},
    Hm = {},
    $m = {},
    Cm = Object.freeze((($m.client_storage = "storage"), ($m.sample_rate = 1), ($m.site_speed_sample_rate = 1), ($m.store_gac = 1), ($m.use_amp_client_id = 1), ($m[O.ib] = 1), ($m[O.oa] = "storeGac"), ($m[O.ja] = 1), ($m[O.qa] = 1), ($m[O.Fa] = 1), ($m[O.Fb] = 1), ($m[O.Va] = 1), ($m[O.Gb] = 1), $m)),
    an = {},
    bn = Object.freeze(((an._cs = 1), (an._useUp = 1), (an.allowAnchor = 1), (an.allowLinker = 1), (an.alwaysSendReferrer = 1), (an.clientId = 1), (an.cookieDomain = 1), (an.cookieExpires = 1), (an.cookieFlags = 1), (an.cookieName = 1), (an.cookiePath = 1), (an.cookieUpdate = 1), (an.legacyCookieDomain = 1), (an.legacyHistoryImport = 1), (an.name = 1), (an.sampleRate = 1), (an.siteSpeedSampleRate = 1), (an.storage = 1), (an.storeGac = 1), (an.useAmpClientId = 1), (an._cd2l = 1), an)),
    cn = Object.freeze({ anonymize_ip: 1 }),
    dn = {},
    Dm = Object.freeze(((dn.campaign = { content: "campaignContent", id: "campaignId", medium: "campaignMedium", name: "campaignName", source: "campaignSource", term: "campaignKeyword" }), (dn.app_id = 1), (dn.app_installer_id = 1), (dn.app_name = 1), (dn.app_version = 1), (dn.description = "exDescription"), (dn.fatal = "exFatal"), (dn.language = 1), (dn.page_hostname = "hostname"), (dn.transport_type = "transport"), (dn[O.fa] = "currencyCode"), (dn[O.Af] = 1), (dn[O.lb] = "location"), (dn[O.ae] = "page"), (dn[O.Na] = "referrer"), (dn[O.Qc] = "title"), (dn[O.Hf] = 1), (dn[O.$a] = 1), dn)),
    en = {},
    fn = Object.freeze(((en.content_id = 1), (en.event_action = 1), (en.event_category = 1), (en.event_label = 1), (en.link_attribution = 1), (en.name = 1), (en[O.ka] = 1), (en[O.zf] = 1), (en[O.la] = 1), (en[O.ia] = 1), en)),
    gn = Object.freeze({ displayfeatures: 1, enableLinkId: 1, enableRecaptcha: 1, eventAction: 1, eventCategory: 1, eventLabel: 1, gaFunctionName: 1, gtmEcommerceData: 1, gtmTrackerName: 1, linker: 1, remarketingLists: 1, socialAction: 1, socialNetwork: 1, socialTarget: 1, timingVar: 1, value: 1 }),
    Wm = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
    hn = {},
    Pm = Object.freeze(((hn.levels = 1), (hn[O.qa] = "duration"), (hn[O.Fb] = 1), hn)),
    jn = {},
    kn = Object.freeze(((jn.anonymize_ip = 1), (jn.fatal = 1), (jn.send_page_view = 1), (jn.store_gac = 1), (jn.use_amp_client_id = 1), (jn[O.oa] = 1), (jn[O.Af] = 1), jn)),
    Qm = function (a, b, c, d) {
      if (void 0 !== c)
        if ((kn[b] && (c = Fa(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a)) d[Em(b)] = c;
        else if (l(a)) d[a] = c;
        else for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    Em = function (a) {
      return a && l(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    ln = {},
    Sm = Object.freeze(((ln.checkout_progress = 1), (ln.select_content = 1), (ln.set_checkout_option = 1), (ln[O.Bb] = 1), (ln[O.Cb] = 1), (ln[O.fb] = 1), (ln[O.hb] = 1), (ln[O.Db] = 1), (ln[O.wa] = 1), (ln[O.Eb] = 1), (ln[O.xa] = 1), ln)),
    mn = {},
    nn = Object.freeze(((mn.checkout_progress = 1), (mn.set_checkout_option = 1), (mn[O.jf] = 1), (mn[O.Bb] = 1), (mn[O.Cb] = 1), (mn[O.fb] = 1), (mn[O.wa] = 1), (mn[O.Eb] = 1), (mn[O.kf] = 1), mn)),
    on = {},
    pn = Object.freeze(((on.generate_lead = 1), (on.login = 1), (on.search = 1), (on.select_content = 1), (on.share = 1), (on.sign_up = 1), (on.view_search_results = 1), (on[O.hb] = 1), (on[O.Db] = 1), (on[O.xa] = 1), on)),
    qn = function (a) {
      var b = "general";
      nn[a] ? (b = "ecommerce") : pn[a] ? (b = "engagement") : "exception" === a && (b = "error");
      return b;
    },
    rn = {},
    sn = Object.freeze(((rn.view_search_results = 1), (rn[O.hb] = 1), (rn[O.Db] = 1), (rn[O.xa] = 1), rn)),
    Mm = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    tn = function (a) {
      if (ua(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
          }
        }
        return 0 < b.length ? b.join("!") : void 0;
      }
    },
    Im = function (a, b, c) {
      var d = function (J) {
          return c.getWithConfig(J);
        },
        e = {},
        f = {},
        g = {},
        k = {},
        m = tn(d(O.zh));
      !c.isGtmEvent && m && Mm(f, "exp", m);
      g["&gtm"] = qk(!0);
      ie() && (k._cs = Ym);
      var n = d(O.$b);
      if (!c.isGtmEvent && Ib(n))
        for (var p in n)
          if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
            var r = d(String(n[p]));
            void 0 !== r && Mm(f, p, r);
          }
      for (var u = kf(c), t = 0; t < u.length; ++t) {
        var q = u[t];
        if (c.isGtmEvent) {
          var v = d(q);
          gn.hasOwnProperty(q) ? (e[q] = v) : bn.hasOwnProperty(q) ? (k[q] = v) : (g[q] = v);
        } else {
          var y = void 0;
          y = q !== O.W ? d(q) : lf(c, q);
          if (fn.hasOwnProperty(q)) Qm(fn[q], q, y, e);
          else if (cn.hasOwnProperty(q)) Qm(cn[q], q, y, g);
          else if (Dm.hasOwnProperty(q)) Qm(Dm[q], q, y, f);
          else if (Cm.hasOwnProperty(q)) Qm(Cm[q], q, y, k);
          else if (/^(dimension|metric|content_group)\d+$/.test(q)) Qm(1, q, y, f);
          else if (q === O.W) {
            if (!Zm) {
              var A = Sa(y);
              A && (f["&did"] = A);
            }
            var w = void 0,
              z = void 0;
            b === O.ya ? (w = Sa(lf(c, q), ".")) : ((w = Sa(lf(c, q, 1), ".")), (z = Sa(lf(c, q, 2), ".")));
            w && (f["&gdid"] = w);
            z && (f["&edid"] = z);
          } else q === O.za && 0 > u.indexOf(O.Fb) && (k.cookieName = y + "_ga");
        }
      }
      (!1 !== d(O.ph) && !1 !== d(O.Yb) && Bm()) || (g.allowAdFeatures = !1);
      if (!1 === d(O.O) || !Am()) {
        var x = c.isGtmEvent ? "allowAdPersonalizationSignals" : "allowAdFeatures";
        x = "allowAdPersonalizationSignals";
        g[x] = !1;
      }
      !c.isGtmEvent && d(O.Za) && (k._useUp = !0);
      if (c.isGtmEvent) {
        k.name = k.name || e.gtmTrackerName;
        var C = g.hitCallback;
        g.hitCallback = function () {
          sa(C) && C();
          c.onSuccess();
        };
      } else {
        Mm(k, "cookieDomain", "auto");
        Mm(g, "forceSSL", !0);
        Mm(e, "eventCategory", qn(b));
        sn[b] && Mm(f, "nonInteraction", !0);
        "login" === b || "sign_up" === b || "share" === b ? Mm(e, "eventLabel", d(O.zf)) : "search" === b || "view_search_results" === b ? Mm(e, "eventLabel", d(O.Eh)) : "select_content" === b && Mm(e, "eventLabel", d(O.th));
        var E = e[O.ka] || {},
          D = E[O.Jb];
        D || (0 != D && E[O.N]) ? (k.allowLinker = !0) : !1 === D && Mm(k, "useAmpClientId", !1);
        f.hitCallback = c.onSuccess;
        k.name = a;
      }
      ie() && ((g["&gcs"] = ye()), xe(O.J) || (k.storage = "none"), xe(O.C) || ((g.allowAdFeatures = !1), (k.storeGac = !1)));
      var G = d(O.ra) || d(O.jb),
        Q = d(O.Oc);
      G && (c.isGtmEvent || (k[O.jb] = G), (k._cd2l = !0));
      Q && !c.isGtmEvent && (k[O.Oc] = Q);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = k;
      return e;
    },
    Nm = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.ye = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.ug = "impressions" === b.translateIfKeyEquals ? Xm(d, !0) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.Ac = "promoView" === b.translateIfKeyEquals ? Xm(e, !0) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.Ac = "promoClick" === b.translateIfKeyEquals ? Xm(f, !0) : f;
        c.ab = b.promoClick.actionField;
        return c;
      }
      for (var g in b)
        if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
          c.action = g;
          var k = b[g].products;
          c.vb = "products" === b.translateIfKeyEquals ? Xm(k, !0) : k;
          c.ab = b[g].actionField;
          break;
        }
      return Object.keys(c).length ? c : null;
    },
    Om = function (a, b) {
      function c(t) {
        return { id: d(O.Ya), affiliation: d(O.wh), revenue: d(O.ia), tax: d(O.wf), shipping: d(O.Rd), coupon: d(O.xh), list: d(O.Qd) || t };
      }
      for (
        var d = function (t) {
            return b.getWithConfig(t);
          },
          e = d(O.aa),
          f,
          g = 0;
        e && g < e.length && !(f = e[g][O.Qd]);
        g++
      );
      var k = d(O.$b);
      if (Ib(k))
        for (var m = 0; e && m < e.length; ++m) {
          var n = e[m],
            p;
          for (p in k) k.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != k[p] && Mm(n, p, n[k[p]]);
        }
      var r = null,
        u = d(O.yh);
      a === O.wa || a === O.Eb ? (r = { action: a, ab: c(), vb: Xm(e) }) : a === O.Bb ? (r = { action: "add", vb: Xm(e) }) : a === O.Cb ? (r = { action: "remove", vb: Xm(e) }) : a === O.xa ? (r = { action: "detail", ab: c(f), vb: Xm(e) }) : a === O.hb ? (r = { action: "impressions", ug: Xm(e) }) : "view_promotion" === a ? (r = { action: "promo_view", Ac: Xm(u) }) : "select_content" === a && u && 0 < u.length ? (r = { action: "promo_click", Ac: Xm(u) }) : "select_content" === a ? (r = { action: "click", ab: { list: d(O.Qd) || f }, vb: Xm(e) }) : a === O.fb || "checkout_progress" === a ? (r = { action: "checkout", vb: Xm(e), ab: { step: a === O.fb ? 1 : d(O.vf), option: d(O.uf) } }) : "set_checkout_option" === a && (r = { action: "checkout_option", ab: { step: d(O.vf), option: d(O.uf) } });
      r && (r.ye = d(O.fa));
      return r;
    },
    un = {},
    Jm = function (a, b) {
      var c = un[a];
      un[a] = K(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  function vn() {
    return (U.gcq = U.gcq || new wn());
  }
  var xn = function (a, b, c) {
      vn().register(a, b, c);
    },
    yn = function (a, b, c, d) {
      vn().push("event", [b, a], c, d);
    },
    zn = function (a, b) {
      vn().push("config", [a], b);
    },
    An = function (a, b, c, d) {
      vn().push("get", [a, b], c, d);
    },
    Bn = {},
    Cn = function () {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.remoteConfig = {};
      this.o = {};
      this.s = null;
      this.m = !1;
    },
    Dn = function (a, b, c, d, e) {
      this.type = a;
      this.s = b;
      this.T = c || "";
      this.m = d;
      this.o = e;
    },
    wn = function () {
      this.o = {};
      this.s = {};
      this.m = [];
      this.D = { AW: !1, UA: !1 };
    },
    En = function (a, b) {
      var c = fl(b);
      return (a.o[c.containerId] = a.o[c.containerId] || new Cn());
    },
    Fn = function (a, b, c) {
      if (b) {
        var d = fl(b);
        if (d && 1 === En(a, b).status) {
          En(a, b).status = 2;
          var e = {};
          Dj &&
            (e.timeoutId = B.setTimeout(function () {
              id(38);
              jj();
            }, 3e3));
          a.push("require", [e], d.containerId);
          Bn[d.containerId] = Ja();
          if (mk()) {
          } else {
            var g = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=" + R.V + "&cx=c";
            lk() && (g += "&sign=" + R.cd);
            var k = ("http:" != B.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
              m = jk(c, g) || k;
            ob(m);
          }
        }
      }
    },
    Gn = function (a, b, c, d) {
      if (d.T) {
        var e = En(a, d.T),
          f = e.s;
        if (f) {
          var g = K(c),
            k = K(e.targetConfig[d.T]),
            m = K(e.containerConfig),
            n = K(e.remoteConfig),
            p = K(a.s),
            r = Ed("gtm.uniqueEventId"),
            u = fl(d.T).prefix,
            t = La(function () {
              var v = g[O.Ib];
              v && H(v);
            }),
            q = hf(
              gf(
                jf(
                  ff(df(ef(cf(bf(af(g), k), m), n), p), function () {
                    Qj(r, u, "2");
                    t();
                  }),
                  function () {
                    Qj(r, u, "3");
                    t();
                  }
                ),
                function (v, y) {
                  a.D[v] = y;
                }
              ),
              function (v) {
                return a.D[v];
              }
            );
          try {
            Qj(r, u, "1");
            f(d.T, b, d.s, q);
          } catch (v) {
            Qj(r, u, "4");
          }
        }
      }
    };
  wn.prototype.register = function (a, b, c) {
    var d = En(this, a);
    if (3 !== d.status) {
      d.s = b;
      d.status = 3;
      c && (K(d.remoteConfig, c), (d.remoteConfig = c));
      var e = fl(a),
        f = Bn[e.containerId];
      if (void 0 !== f) {
        var g = U[e.containerId].bootstrap,
          k = e.prefix.toUpperCase();
        U[e.containerId]._spx && (k = k.toLowerCase());
        var m = Ed("gtm.uniqueEventId"),
          n = k,
          p = Ja() - g;
        if (Dj && !oj[m]) {
          m !== kj && (fj(), (kj = m));
          var r = n + "." + Math.floor(g - f) + "." + Math.floor(p);
          sj = sj ? sj + "," + r : "&cl=" + r;
        }
        delete Bn[e.containerId];
      }
      this.flush();
    }
  };
  wn.prototype.push = function (a, b, c, d) {
    var e = Math.floor(Ja() / 1e3);
    Fn(this, c, b[0][O.ra] || this.s[O.ra]);
    c && En(this, c).m && (d = !1);
    this.m.push(new Dn(a, e, c, b, d));
    d || this.flush();
  };
  wn.prototype.insert = function (a, b, c) {
    var d = Math.floor(Ja() / 1e3);
    0 < this.m.length ? this.m.splice(1, 0, new Dn(a, d, c, b, !1)) : this.m.push(new Dn(a, d, c, b, !1));
  };
  wn.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.m.length; ) {
      var f = this.m[0];
      if (f.o) !f.T || En(this, f.T).m ? ((f.o = !1), this.m.push(f)) : c.push(f), this.m.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== En(this, f.T).status && !a) {
              this.m.push.apply(this.m, c);
              return;
            }
            Dj && B.clearTimeout(f.m[0].timeoutId);
            break;
          case "set":
            Ba(f.m[0], function (u, t) {
              K(Qa(u, t), b.s);
            });
            break;
          case "config":
            e.Ja = {};
            Ba(
              f.m[0],
              (function (u) {
                return function (t, q) {
                  K(Qa(t, q), u.Ja);
                };
              })(e)
            );
            var g = !!e.Ja[O.Uc];
            delete e.Ja[O.Uc];
            var k = En(this, f.T),
              m = fl(f.T),
              n = m.containerId === m.id;
            g || (n ? (k.containerConfig = {}) : (k.targetConfig[f.T] = {}));
            (k.m && g) || Gn(this, O.ya, e.Ja, f);
            k.m = !0;
            delete e.Ja[O.Lb];
            n ? K(e.Ja, k.containerConfig) : K(e.Ja, k.targetConfig[f.T]);
            d = !0;
            break;
          case "event":
            e.Fc = {};
            Ba(
              f.m[0],
              (function (u) {
                return function (t, q) {
                  K(Qa(t, q), u.Fc);
                };
              })(e)
            );
            Gn(this, f.m[1], e.Fc, f);
            break;
          case "get":
            var p = {},
              r = ((p[O.Ma] = f.m[0]), (p[O.Wa] = f.m[1]), p);
            Gn(this, O.Ka, r, f);
        }
        this.m.shift();
        Hn(this, f);
      }
      e = { Ja: e.Ja, Fc: e.Fc };
    }
    this.m.push.apply(this.m, c);
    d && this.flush();
  };
  var Hn = function (a, b) {
    if ("require" !== b.type)
      if (b.T) for (var c = a.getCommandListeners(b.T)[b.type] || [], d = 0; d < c.length; d++) c[d]();
      else
        for (var e in a.o)
          if (a.o.hasOwnProperty(e)) {
            var f = a.o[e];
            if (f && f.o) for (var g = f.o[b.type] || [], k = 0; k < g.length; k++) g[k]();
          }
  };
  wn.prototype.getRemoteConfig = function (a) {
    return En(this, a).remoteConfig;
  };
  wn.prototype.getCommandListeners = function (a) {
    return En(this, a).o;
  };
  var Ln = "HA GF G UA AW DC".split(" "),
    Mn = !1,
    Nn = !1,
    On = 0;
  function Pn(a, b) {
    var c = { event: a };
    b && ((c.eventModel = K(b)), b[O.Ib] && (c.eventCallback = b[O.Ib]), b[O.Nc] && (c.eventTimeout = b[O.Nc]));
    return c;
  }
  function Qn(a) {
    a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", { value: vd() });
    return a["gtm.uniqueEventId"];
  }
  function Zn() {
    return Mn;
  }
  var $n = {
      config: function (a) {
        var b,
          c = Qn(a);
        return b;
      },
      consent: function (a) {
        if (3 === a.length) {
          id(39);
          var b = vd(),
            c = a[1];
          "default" === c ? ue(a[2]) : "update" === c && we(a[2], b);
        }
      },
      event: function (a) {
        var b = a[1];
        if (!(2 > a.length) && l(b)) {
          var c;
          if (2 < a.length) {
            if ((!Ib(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            c = a[2];
          }
          var d = Pn(b, c),
            e = Qn(a);
          d["gtm.uniqueEventId"] = e;
          return d;
        }
      },
      get: function (a) {},
      js: function (a) {
        if (2 == a.length && a[1].getTime) {
          Nn = !0;
          Zn();
          var b = {};
          return (b.event = "gtm.js"), (b["gtm.start"] = a[1].getTime()), (b["gtm.uniqueEventId"] = Qn(a)), b;
        }
      },
      policy: function () {},
      set: function (a) {
        var b;
        2 == a.length && Ib(a[1]) ? (b = K(a[1])) : 3 == a.length && l(a[1]) && ((b = {}), Ib(a[2]) || ua(a[2]) ? (b[a[1]] = K(a[2])) : (b[a[1]] = a[2]));
        if (b) {
          b._clear = !0;
          return b;
        }
      },
    },
    ao = { policy: !0 };
  var bo = function () {
    this.m = [];
    this.o = [];
  };
  bo.prototype.push = function (a, b, c) {
    var d = { debugContext: c, message: a, notBeforeEventId: b, priorityId: this.m.length + 1 };
    this.m.push(d);
    for (var e = 0; e < this.o.length; e++)
      try {
        this.o[e](d);
      } catch (f) {}
  };
  bo.prototype.xg = function (a) {
    this.o.push(a);
  };
  bo.prototype.get = function () {
    for (var a = {}, b = 0; b < this.m.length; b++) {
      var c = this.m[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  bo.prototype.get = bo.prototype.get;
  bo.prototype.listen = bo.prototype.xg;
  bo.prototype.push = bo.prototype.push;
  function co(a, b) {
    return a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId;
  }
  var eo = function (a) {
      var b = B[R.V].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    fo = function (a) {
      var b = B[R.V],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var go = !1,
    ho = [];
  function io() {
    if (!go) {
      go = !0;
      for (var a = 0; a < ho.length; a++) H(ho[a]);
    }
  }
  var jo = function (a) {
    go ? H(a) : ho.push(a);
  };
  var Ao = function (a) {
    if (zo(a)) return a;
    this.m = a;
  };
  Ao.prototype.Ai = function () {
    return this.m;
  };
  var zo = function (a) {
    return !a || "object" !== Gb(a) || Ib(a) ? !1 : "getUntrustedUpdateValue" in a;
  };
  Ao.prototype.getUntrustedUpdateValue = Ao.prototype.Ai;
  var Bo = 0,
    Co,
    Do = {},
    Eo = [],
    Fo = [],
    Go = !1,
    Ho = !1,
    Io = function (a) {
      return B[R.V].push(a);
    },
    Jo = function (a, b) {
      var c = U[R.V],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = B.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d && (g && (B.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function Ko(a) {
    var b = a._clear;
    Ba(a, function (d, e) {
      "_clear" !== d && (b && Hd(d, void 0), Hd(d, e));
    });
    qd || (qd = a["gtm.start"]);
    var c = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    c || ((c = vd()), (a["gtm.uniqueEventId"] = c), Hd("gtm.uniqueEventId", c));
    return hk(a);
  }
  function Lo(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Ca(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b) return !0;
    }
    return !1;
  }
  function Mo() {
    for (var a = !1; !Ho && (0 < Eo.length || 0 < Fo.length); ) {
      if (!Go && Lo(Eo[0])) {
        var b = {},
          c = ((b.event = "gtm.init_consent"), b),
          d = {},
          e = ((d.event = "gtm.init"), d),
          f = Eo[0]["gtm.uniqueEventId"];
        f && ((c["gtm.uniqueEventId"] = f - 2), (e["gtm.uniqueEventId"] = f - 1));
        Eo.unshift(c, e);
        Go = !0;
      }
      Ho = !0;
      delete Bd.eventModel;
      Dd();
      var g = null,
        k = void 0;
      null == g && (g = Eo.shift());
      if (null != g) {
        var n = zo(g);
        if (n) {
          var p = g;
          g = zo(p) ? p.getUntrustedUpdateValue() : void 0;
          for (var r = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], u = 0; u < r.length; u++) {
            var t = r[u],
              q = Ed(t, 1);
            if (ua(q) || Ib(q)) q = K(q);
            Cd[t] = q;
          }
        }
        try {
          if (sa(g))
            try {
              g.call(Fd);
            } catch (G) {}
          else if (ua(g)) {
            var v = g;
            if (l(v[0])) {
              var y = v[0].split("."),
                A = y.pop(),
                w = v.slice(1),
                z = Ed(y.join("."), 2);
              if (null != z)
                try {
                  z[A].apply(z, w);
                } catch (G) {}
            }
          } else {
            if (Ca(g)) {
              a: {
                var x = g,
                  C = k;
                if (x.length && l(x[0])) {
                  var E = $n[x[0]];
                  if (E && (!n || !ao[x[0]])) {
                    g = E(x, C);
                    break a;
                  }
                }
                g = void 0;
              }
              if (!g) {
                Ho = !1;
                continue;
              }
            }
            a = Ko(g) || a;
          }
        } finally {
          n && Dd(!0);
        }
      }
      Ho = !1;
    }
    return !a;
  }
  function Oo() {
    var b = Mo();
    try {
      eo(R.H);
    } catch (c) {}
    return b;
  }
  var Ro = function () {
    var a = jb(R.V, []),
      b = jb("google_tag_manager", {});
    b = b[R.V] = b[R.V] || {};
    pi(function () {
      b.gtmDom || ((b.gtmDom = !0), a.push({ event: "gtm.dom" }));
    });
    jo(function () {
      b.gtmLoad || ((b.gtmLoad = !0), a.push({ event: "gtm.load" }));
    });
    b.subscribers = (b.subscribers || 0) + 1;
    var c = a.push;
    a.push = function () {
      var e;
      if (0 < U.SANDBOXED_JS_SEMAPHORE) {
        e = [];
        for (var f = 0; f < arguments.length; f++) e[f] = new Ao(arguments[f]);
      } else e = [].slice.call(arguments, 0);
      Eo.push.apply(Eo, e);
      var g = c.apply(a, e);
      if (300 < this.length) for (id(4); 300 < this.length; ) this.shift();
      var k = "boolean" !== typeof g || g;
      return Mo() && k;
    };
    var d = a.slice(0);
    Eo.push.apply(Eo, d);
    if (Po()) {
      H(Oo);
    }
  };
  var Po = function () {
    var a = !0;
    return a;
  };
  function So(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ja();
    return b < c + 3e5 && b > c - 9e5;
  }
  var To = function (a) {
    U.addTargetToGroup ? U.addTargetToGroup(a) : ((U.pendingDefaultTargets = U.pendingDefaultTargets || []), U.pendingDefaultTargets.push(a));
  };
  var Uo = {};
  Uo.Yc = new String("undefined");
  var Xo = function (a, b, c) {
      var d = { event: b, "gtm.element": a, "gtm.elementClasses": Cb(a, "className"), "gtm.elementId": a["for"] || xb(a, "id") || "", "gtm.elementTarget": a.formTarget || Cb(a, "target") || "" };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Cb(a, "href") || a.src || a.code || a.codebase || "";
      return d;
    },
    Yo = function (a) {
      U.hasOwnProperty("autoEventsSettings") || (U.autoEventsSettings = {});
      var b = U.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Zo = function (a, b, c) {
      Yo(a)[b] = c;
    },
    $o = function (a, b, c, d) {
      var e = Yo(a),
        f = Ka(e, b, d);
      e[b] = c(f);
    },
    ap = function (a, b, c) {
      var d = Yo(a);
      return Ka(d, b, c);
    };
  var bp = ["input", "select", "textarea"],
    cp = ["button", "hidden", "image", "reset", "submit"],
    dp = function (a) {
      var b = a.tagName.toLowerCase();
      return 0 > bp.indexOf(b) || ("input" === b && 0 <= cp.indexOf(a.type.toLowerCase())) ? !1 : !0;
    },
    ep = function (a) {
      return a.form ? (a.form.tagName ? a.form : F.getElementById(a.form)) : Ab(a, ["form"], 100);
    },
    fp = function (a, b, c) {
      if (!a.elements) return 0;
      for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
        var g = a.elements[e];
        if (dp(g)) {
          if (g.dataset[c] === d) return f;
          f++;
        }
      }
      return 0;
    };
  var gp = !!B.MutationObserver,
    hp = void 0,
    ip = function (a) {
      if (!hp) {
        var b = function () {
          var c = F.body;
          if (c)
            if (gp)
              new MutationObserver(function () {
                for (var e = 0; e < hp.length; e++) H(hp[e]);
              }).observe(c, { childList: !0, subtree: !0 });
            else {
              var d = !1;
              vb(c, "DOMNodeInserted", function () {
                d ||
                  ((d = !0),
                  H(function () {
                    d = !1;
                    for (var e = 0; e < hp.length; e++) H(hp[e]);
                  }));
              });
            }
        };
        hp = [];
        F.body ? b() : H(b);
      }
      hp.push(a);
    };
  var tp = function (a, b, c) {
    function d() {
      var g = a();
      f += e ? ((Ja() - e) * g.playbackRate) / 1e3 : 0;
      e = Ja();
    }
    var e = 0,
      f = 0;
    return {
      createEvent: function (g, k, m) {
        var n = a(),
          p = n.jg,
          r = void 0 !== m ? Math.round(m) : void 0 !== k ? Math.round(n.jg * k) : Math.round(n.li),
          u = void 0 !== k ? Math.round(100 * k) : 0 >= p ? 0 : Math.round((r / p) * 100),
          t = F.hidden ? !1 : 0.5 <= tf(c);
        d();
        var q = void 0;
        void 0 !== b && (q = [b]);
        var v = Xo(c, "gtm.video", q);
        v["gtm.videoProvider"] = "youtube";
        v["gtm.videoStatus"] = g;
        v["gtm.videoUrl"] = n.url;
        v["gtm.videoTitle"] = n.title;
        v["gtm.videoDuration"] = Math.round(p);
        v["gtm.videoCurrentTime"] = Math.round(r);
        v["gtm.videoElapsedTime"] = Math.round(f);
        v["gtm.videoPercent"] = u;
        v["gtm.videoVisible"] = t;
        return v;
      },
      gj: function () {
        e = Ja();
      },
      te: function () {
        d();
      },
    };
  };
  var up = B.clearTimeout,
    vp = B.setTimeout,
    W = function (a, b, c, d) {
      if (mk()) {
        b && H(b);
      } else return ob(a, b, c, d);
    },
    wp = function () {
      return new Date();
    },
    xp = function () {
      return B.location.href;
    },
    yp = function (a) {
      return Ef(Gf(a), "fragment");
    },
    zp = function (a) {
      return Ff(Gf(a));
    },
    Ap = function (a, b) {
      return Ed(a, b || 2);
    },
    Bp = function (a, b, c) {
      var d;
      b ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Io(a))) : (d = Io(a));
      return d;
    },
    Cp = function (a, b) {
      B[a] = b;
    },
    X = function (a, b, c) {
      b && (void 0 === B[a] || (c && !B[a])) && (B[a] = b);
      return B[a];
    },
    Dp = function (a, b, c) {
      return lg(a, b, void 0 === c ? !0 : !!c);
    },
    Ep = function (a, b, c) {
      return 0 === ug(a, b, c);
    },
    Fp = function (a, b) {
      if (mk()) {
        b && H(b);
      } else tb(a, b);
    },
    Gp = function (a) {
      return !!ap(a, "init", !1);
    },
    Hp = function (a) {
      Zo(a, "init", !0);
    },
    Ip = function (a) {
      var b = nd,
        c = "?id=" + encodeURIComponent(a) + "&l=" + R.V;
      lk() && ((c += "&sign=" + R.cd), ib && (b = ib.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
      var d = jl("https://", "http://", b + c);
      W(d);
    },
    Jp = function (a, b, c) {
      Dj && (Jb(a) || Rj(c, b, a));
    };

  var gq = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
  function hq(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var iq = new ya();
  function jq(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = iq.get(e);
      f || ((f = new RegExp(b, d)), iq.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function kq(a, b) {
    function c(g) {
      var k = Gf(g),
        m = Ef(k, "protocol"),
        n = Ef(k, "host", !0),
        p = Ef(k, "port"),
        r = Ef(k, "path").toLowerCase().replace(/\/$/, "");
      if (void 0 === m || ("http" === m && "80" === p) || ("https" === m && "443" === p)) (m = "web"), (p = "default");
      return [m, n, p, r];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
    return !0;
  }
  function lq(a) {
    return mq(a) ? 1 : 0;
  }
  function mq(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = K(a, {});
        K({ arg1: c[d], any_of: void 0 }, e);
        if (lq(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < gq.length; g++) {
                var k = gq[g];
                if (b[k]) {
                  f = b[k](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return hq(b, c);
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return jq(b, c, a.ignore_case);
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return kq(b, c);
    }
    return !1;
  }
  Object.freeze({ dl: 1, id: 1 });
  Object.freeze(["config", "event", "get", "set"]);
  var rq = encodeURI,
    Y = encodeURIComponent,
    sq = ub;
  var tq = function (a, b) {
    if (!a) return !1;
    var c = Ef(Gf(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
        if (0 <= f && c.indexOf(e, f) == f) return !0;
      }
    }
    return !1;
  };
  var uq = function (a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  };
  var vq = function (a, b, c) {
    for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]));
  };
  var Er = function (a, b, c) {
    this.o = a;
    this.eventName = b;
    this.m = c;
    this.metadata = {};
  };
  function Pr() {
    return (B.gaGlobal = B.gaGlobal || {});
  }
  var Qr = function () {
      var a = Pr();
      a.hid = a.hid || xa();
      return a.hid;
    },
    Rr = function (a, b) {
      var c = Pr();
      if (void 0 == c.vid || (b && !c.from_cookie)) (c.vid = a), (c.from_cookie = b);
    };
  var ms = function () {
    if (sa(B.__uspapi)) {
      var a = "";
      try {
        B.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var Is = window,
    Js = document,
    Ks = function (a) {
      var b = Is._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === Is["ga-disable-" + a])) return !0;
      try {
        var c = Is.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (var d = hg("AMP_TOKEN", String(Js.cookie), !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return !0;
      return Js.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var Ls = {};
  function Os(a) {
    delete a.eventModel[O.Lb];
    Qs(a.eventModel);
  }
  var Qs = function (a) {
    Ba(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[O.Oa] || {};
    Ba(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  };
  var Ts = function (a, b, c) {
      yn(b, c, a);
    },
    gt = function (a, b, c) {
      yn(b, c, a, !0);
    },
    it = function (a, b) {};
  function ht(a, b) {}
  var Z = { g: {} };
  (Z.g.gaawc = ["google"]),
    (function () {
      (function (a) {
        Z.__gaawc = a;
        Z.__gaawc.h = "gaawc";
        Z.__gaawc.isVendorTemplate = !0;
        Z.__gaawc.priorityOverride = 10;
      })(function (a) {
        var b = String(a.vtp_measurementId);
        if (l(b) && 0 === b.indexOf("G-")) {
          var c = uq(a.vtp_fieldsToSet, "name", "value") || {};
          if (c.hasOwnProperty(O.Oa) || a.vtp_userProperties) {
            var d = c[O.Oa] || {};
            K(uq(a.vtp_userProperties, "name", "value"), d);
            c[O.Oa] = d;
          }
          a.vtp_enableSendToServerContainer && a.vtp_serverContainerUrl && ((c[O.ra] = a.vtp_serverContainerUrl), (c[O.ac] = !0));
          var e = a.vtp_userDataVariable;
          e && (c[O.Aa] = e);
          vq(c, O.fe, function (f) {
            return Fa(f);
          });
          vq(c, O.he, function (f) {
            return Number(f);
          });
          c.send_page_view = a.vtp_sendPageView;
          zn(c, b);
          H(a.vtp_gtmOnSuccess);
        } else H(a.vtp_gtmOnFailure);
      });
    })();

  (Z.g.ctv = ["google"]),
    (function () {
      (function (a) {
        Z.__ctv = a;
        Z.__ctv.h = "ctv";
        Z.__ctv.isVendorTemplate = !0;
        Z.__ctv.priorityOverride = 0;
      })(function () {
        return "21";
      });
    })();

  (Z.g.e = ["google"]),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.h = "e";
        Z.__e.isVendorTemplate = !0;
        Z.__e.priorityOverride = 0;
      })(function (a) {
        var b = String(Kd(a.vtp_gtmEventId, "event"));
        a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
        return b;
      });
    })();
  (Z.g.f = ["google"]),
    (function () {
      (function (a) {
        Z.__f = a;
        Z.__f.h = "f";
        Z.__f.isVendorTemplate = !0;
        Z.__f.priorityOverride = 0;
      })(function (a) {
        var b = Ap("gtm.referrer", 1) || F.referrer;
        return b ? (a.vtp_component && "URL" != a.vtp_component ? Ef(Gf(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : zp(String(b))) : String(b);
      });
    })();
  (Z.g.cl = ["google"]),
    (function () {
      function a(b) {
        var c = b.target;
        if (c) {
          var d = Xo(c, "gtm.click");
          Bp(d);
        }
      }
      (function (b) {
        Z.__cl = b;
        Z.__cl.h = "cl";
        Z.__cl.isVendorTemplate = !0;
        Z.__cl.priorityOverride = 0;
      })(function (b) {
        if (!Gp("cl")) {
          var c = X("document");
          vb(c, "click", a, !0);
          Hp("cl");
        }
        H(b.vtp_gtmOnSuccess);
      });
    })();
  (Z.g.r = ["google"]),
    (function () {
      (function (a) {
        Z.__r = a;
        Z.__r.h = "r";
        Z.__r.isVendorTemplate = !0;
        Z.__r.priorityOverride = 0;
      })(function (a) {
        return xa(a.vtp_min, a.vtp_max);
      });
    })();
  (Z.g.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.h = "u";
        Z.__u.isVendorTemplate = !0;
        Z.__u.priorityOverride = 0;
      })(function (b) {
        var c;
        c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Ap("gtm.url", 1)) || xp();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return zp(String(c));
        var e = Gf(String(c)),
          f;
        if ("QUERY" === d)
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              k = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            g ? (ua(k) ? (n = k) : (n = String(k).replace(/\s+/g, "").split(","))) : (n = [String(k)]);
            for (var p = 0; p < n.length; p++) {
              var r = Ef(e, "QUERY", void 0, void 0, n[p]);
              if (void 0 != r && (!m || "" !== r)) {
                f = r;
                break a;
              }
            }
            f = void 0;
          }
        else f = Ef(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
        return f;
      });
    })();
  (Z.g.v = ["google"]),
    (function () {
      (function (a) {
        Z.__v = a;
        Z.__v.h = "v";
        Z.__v.isVendorTemplate = !0;
        Z.__v.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = Ap(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        Jp(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();
  (Z.g.ua = ["google"]),
    (function () {
      function a(g, k) {
        if (g)
          for (var m in g)
            if (!d[m] && g.hasOwnProperty(m)) {
              var n = c[m] ? Fa(g[m]) : g[m];
              "anonymizeIp" != m || n || (n = void 0);
              k[m] = n;
            }
      }
      var b,
        c = { allowAnchor: !0, allowLinker: !0, alwaysSendReferrer: !0, anonymizeIp: !0, cookieUpdate: !0, exFatal: !0, forceSSL: !0, javaEnabled: !0, legacyHistoryImport: !0, nonInteraction: !0, useAmpClientId: !0, useBeacon: !0, storeGac: !0, allowAdFeatures: !0, allowAdPersonalizationSignals: !0, _cd2l: !0 },
        d = { urlPassthrough: !0 },
        e = function (g) {
          var k = {};
          g.vtp_gaSettings && K(uq(g.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), k);
          K(uq(g.vtp_fieldsToSet, "fieldName", "value"), k);
          Fa(k.urlPassthrough) && (k._useUp = !0);
          g.vtp_transportUrl && (k._x_19 = g.vtp_transportUrl);
          return k;
        },
        f = function (g) {
          function k() {
            if (g.vtp_doubleClick || "DISPLAY_FEATURES" == g.vtp_advertisingFeaturesType) q.displayfeatures = !0;
          }
          var m = {},
            n = {},
            p = {},
            r = {};
          if (g.vtp_gaSettings) {
            var u = g.vtp_gaSettings;
            K(uq(u.vtp_contentGroup, "index", "group"), n);
            K(uq(u.vtp_dimension, "index", "dimension"), p);
            K(uq(u.vtp_metric, "index", "metric"), r);
            var t = K(u);
            t.vtp_fieldsToSet = void 0;
            t.vtp_contentGroup = void 0;
            t.vtp_dimension = void 0;
            t.vtp_metric = void 0;
            g = K(g, t);
          }
          K(uq(g.vtp_contentGroup, "index", "group"), n);
          K(uq(g.vtp_dimension, "index", "dimension"), p);
          K(uq(g.vtp_metric, "index", "metric"), r);
          var q = e(g),
            v = "",
            y = Ei(g.vtp_functionName);
          if (sa(y)) {
            var A = "",
              w = "";
            g.vtp_setTrackerName && "string" == typeof g.vtp_trackerName ? "" !== g.vtp_trackerName && ((w = g.vtp_trackerName), (A = w + ".")) : ((w = "gtm" + vd()), (A = w + "."));
            var z = function (fa) {
                var M = [].slice.call(arguments, 0);
                M[0] = A + M[0];
                y.apply(window, M);
              },
              x = function (fa, M) {
                return void 0 === M ? M : fa(M);
              },
              C = function (fa, M) {
                if (M) for (var ia in M) M.hasOwnProperty(ia) && (q[fa + ia] = M[ia]);
              },
              E = function () {},
              D = function (fa, M) {
                return void 0 === g[fa] ? m[M] : g[fa];
              },
              G = String(g.vtp_trackingId || m.trackingId || "");
            C("contentGroup", n);
            C("dimension", p);
            C("metric", r);
            var Q = {};
            g.vtp_enableEcommerce && (q.gtmEcommerceData = E());
            if ("TRACK_EVENT" === g.vtp_trackType) (v = "track_event"), k(), (q.eventCategory = String(D("vtp_eventCategory", "category"))), (q.eventAction = String(D("vtp_eventAction", "action"))), (q.eventLabel = x(String, D("vtp_eventLabel", "label"))), (q.value = x(Ea, D("vtp_eventValue", "value")));
            else if ("TRACK_PAGEVIEW" == g.vtp_trackType) {
              if (((v = O.Xb), k(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == g.vtp_advertisingFeaturesType && (q.remarketingLists = !0), g.vtp_autoLinkDomains)) {
                var J = {};
                J[O.N] = g.vtp_autoLinkDomains;
                J.use_anchor = g.vtp_useHashAutoLink;
                J[O.Kb] = g.vtp_decorateFormsAutoLink;
                q[O.ka] = J;
              }
            } else "TRACK_SOCIAL" === g.vtp_trackType ? ((v = "track_social"), (q.socialNetwork = String(g.vtp_socialNetwork)), (q.socialAction = String(g.vtp_socialAction)), (q.socialTarget = String(g.vtp_socialActionTarget))) : "TRACK_TIMING" == g.vtp_trackType && ((v = "timing_complete"), (q.eventCategory = String(D("vtp_timingCategory", "category"))), (q.timingVar = String(D("vtp_timingVar", "name"))), (q.value = Ea(D("vtp_timingValue", "value"))), (q.eventLabel = x(String, D("vtp_timingLabel", "label"))));
            g.vtp_enableRecaptcha && (q.enableRecaptcha = !0);
            g.vtp_enableLinkId && (q.enableLinkId = !0);
            a(q, Q);
            q.name || (Q.gtmTrackerName = w);
            Q.gaFunctionName = g.vtp_functionName;
            void 0 !== g.vtp_nonInteraction && (Q.nonInteraction = g.vtp_nonInteraction);
            var I = jf(ff(af(Q), g.vtp_gtmOnSuccess), g.vtp_gtmOnFailure);
            I.isGtmEvent = !0;
            Vm(G, v, Date.now(), I);
            if ("TRACK_TRANSACTION" == g.vtp_trackType) {
            } else if ("DECORATE_LINK" == g.vtp_trackType) {
            } else if ("DECORATE_FORM" == g.vtp_trackType) {
            } else if ("TRACK_DATA" == g.vtp_trackType) {
            }
            if (!b) {
              var pa = g.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
              g.vtp_useInternalVersion && !g.vtp_useDebugVersion && (pa = "internal/" + pa);
              b = !0;
              var va = jk(q._x_19, "/analytics.js"),
                qa = jl("https:", "http:", "//www.google-analytics.com/" + pa, q && !!q.forceSSL);
              W(
                "analytics.js" === pa && va ? va : qa,
                function () {
                  var fa = Ci();
                  (fa && fa.loaded) || g.vtp_gtmOnFailure();
                },
                g.vtp_gtmOnFailure
              );
            }
          } else H(g.vtp_gtmOnFailure);
        };
      (function (g) {
        Z.__ua = g;
        Z.__ua.h = "ua";
        Z.__ua.isVendorTemplate = !0;
        Z.__ua.priorityOverride = 0;
      })(function (g) {
        Be(
          function () {
            f(g);
          },
          [O.J, O.C]
        );
      });
    })();

  (Z.g.ytl = ["google"]),
    (function () {
      function a() {
        var q = Math.round(1e9 * Math.random()) + "";
        return F.getElementById(q) ? a() : q;
      }
      function b(q, v) {
        if (!q) return !1;
        for (var y = 0; y < p.length; y++) if (0 <= q.indexOf("//" + p[y] + "/" + v)) return !0;
        return !1;
      }
      function c(q, v) {
        var y = q.getAttribute("src");
        if (b(y, "embed/")) {
          if (0 < y.indexOf("enablejsapi=1")) return !0;
          if (v) {
            var A = q.setAttribute,
              w;
            var z = -1 !== y.indexOf("?") ? "&" : "?";
            if (-1 < y.indexOf("origin=")) w = y + z + "enablejsapi=1";
            else {
              if (!u) {
                var x = X("document");
                u = x.location.protocol + "//" + x.location.hostname;
                x.location.port && (u += ":" + x.location.port);
              }
              w = y + z + "enablejsapi=1&origin=" + encodeURIComponent(u);
            }
            A.call(q, "src", w);
            return !0;
          }
        }
        return !1;
      }
      function d(q, v) {
        if (!q.getAttribute("data-gtm-yt-inspected-" + v.Ye) && (q.setAttribute("data-gtm-yt-inspected-" + v.Ye, "true"), c(q, v.mg))) {
          q.id || (q.id = a());
          var y = X("YT"),
            A = y.get(q.id);
          A || (A = new y.Player(q.id));
          var w = f(A, v),
            z = {},
            x;
          for (x in w)
            (z.Wb = x),
              w.hasOwnProperty(z.Wb) &&
                A.addEventListener(
                  z.Wb,
                  (function (C) {
                    return function (E) {
                      return w[C.Wb](E.data);
                    };
                  })(z)
                ),
              (z = { Wb: z.Wb });
        }
      }
      function e(q) {
        H(function () {
          function v() {
            for (var A = y.getElementsByTagName("iframe"), w = A.length, z = 0; z < w; z++) d(A[z], q);
          }
          var y = X("document");
          v();
          ip(v);
        });
      }
      function f(q, v) {
        var y, A;
        function w() {
          I = tp(
            function () {
              return { url: L, title: T, jg: P, li: q.getCurrentTime(), playbackRate: ba };
            },
            v.Ye,
            q.getIframe()
          );
          P = 0;
          T = L = "";
          ba = 1;
          return z;
        }
        function z(qa) {
          switch (qa) {
            case r.PLAYING:
              P = Math.round(q.getDuration());
              L = q.getVideoUrl();
              if (q.getVideoData) {
                var fa = q.getVideoData();
                T = fa ? fa.title : "";
              }
              ba = q.getPlaybackRate();
              v.fi ? Bp(I.createEvent("start")) : I.te();
              N = m(v.$i, v.Zi, q.getDuration());
              return x(qa);
            default:
              return z;
          }
        }
        function x() {
          S = q.getCurrentTime();
          pa = wp().getTime();
          I.gj();
          J();
          return C;
        }
        function C(qa) {
          var fa;
          switch (qa) {
            case r.ENDED:
              return D(qa);
            case r.PAUSED:
              fa = "pause";
            case r.BUFFERING:
              var M = q.getCurrentTime() - S;
              fa = 1 < Math.abs(((wp().getTime() - pa) / 1e3) * ba - M) ? "seek" : fa || "buffering";
              q.getCurrentTime() && (v.ei ? Bp(I.createEvent(fa)) : I.te());
              Q();
              return E;
            case r.UNSTARTED:
              return w(qa);
            default:
              return C;
          }
        }
        function E(qa) {
          switch (qa) {
            case r.ENDED:
              return D(qa);
            case r.PLAYING:
              return x(qa);
            case r.UNSTARTED:
              return w(qa);
            default:
              return E;
          }
        }
        function D() {
          for (; A; ) {
            var qa = y;
            up(A);
            qa();
          }
          v.di && Bp(I.createEvent("complete", 1));
          return w(r.UNSTARTED);
        }
        function G() {}
        function Q() {
          A && (up(A), (A = 0), (y = G));
        }
        function J() {
          if (N.length && 0 !== ba) {
            var qa = -1,
              fa;
            do {
              fa = N[0];
              if (fa.wb > q.getDuration()) return;
              qa = (fa.wb - q.getCurrentTime()) / ba;
              if (0 > qa && (N.shift(), 0 === N.length)) return;
            } while (0 > qa);
            y = function () {
              A = 0;
              y = G;
              0 < N.length && N[0].wb === fa.wb && (N.shift(), Bp(I.createEvent("progress", fa.Cg, fa.Jg)));
              J();
            };
            A = vp(y, 1e3 * qa);
          }
        }
        var I,
          N = [],
          P,
          L,
          T,
          ba,
          S,
          pa,
          va = w(r.UNSTARTED);
        A = 0;
        y = G;
        return {
          onStateChange: function (qa) {
            va = va(qa);
          },
          onPlaybackRateChange: function (qa) {
            S = q.getCurrentTime();
            pa = wp().getTime();
            I.te();
            ba = qa;
            Q();
            J();
          },
        };
      }
      function g(q) {
        for (var v = q.split(","), y = v.length, A = [], w = 0; w < y; w++) {
          var z = parseInt(v[w], 10);
          isNaN(z) || 100 < z || 0 > z || A.push(z / 100);
        }
        A.sort(function (x, C) {
          return x - C;
        });
        return A;
      }
      function k(q) {
        for (var v = q.split(","), y = v.length, A = [], w = 0; w < y; w++) {
          var z = parseInt(v[w], 10);
          isNaN(z) || 0 > z || A.push(z);
        }
        A.sort(function (x, C) {
          return x - C;
        });
        return A;
      }
      function m(q, v, y) {
        var A = q.map(function (x) {
          return { wb: x, Jg: x, Cg: void 0 };
        });
        if (!v.length) return A;
        var w = v.map(function (x) {
          return { wb: x * y, Jg: void 0, Cg: x };
        });
        if (!A.length) return w;
        var z = A.concat(w);
        z.sort(function (x, C) {
          return x.wb - C.wb;
        });
        return z;
      }
      function n(q) {
        var v = !!q.vtp_captureStart,
          y = !!q.vtp_captureComplete,
          A = !!q.vtp_capturePause,
          w = g(q.vtp_progressThresholdsPercent + ""),
          z = k(q.vtp_progressThresholdsTimeInSeconds + ""),
          x = !!q.vtp_fixMissingApi;
        if (v || y || A || w.length || z.length) {
          var C = { fi: v, di: y, ei: A, Zi: w, $i: z, mg: x, Ye: void 0 === q.vtp_uniqueTriggerId ? "" : q.vtp_uniqueTriggerId },
            E = X("YT"),
            D = function () {
              e(C);
            };
          H(q.vtp_gtmOnSuccess);
          if (E) E.ready && E.ready(D);
          else {
            var G = X("onYouTubeIframeAPIReady");
            Cp("onYouTubeIframeAPIReady", function () {
              G && G();
              D();
            });
            H(function () {
              for (var Q = X("document"), J = Q.getElementsByTagName("script"), I = J.length, N = 0; N < I; N++) {
                var P = J[N].getAttribute("src");
                if (b(P, "iframe_api") || b(P, "player_api")) return;
              }
              for (var L = Q.getElementsByTagName("iframe"), T = L.length, ba = 0; ba < T; ba++)
                if (!t && c(L[ba], C.mg)) {
                  W("https://www.youtube.com/iframe_api");
                  t = !0;
                  break;
                }
            });
          }
        } else H(q.vtp_gtmOnSuccess);
      }
      var p = ["www.youtube.com", "www.youtube-nocookie.com"],
        r = { UNSTARTED: -1, ENDED: 0, PLAYING: 1, PAUSED: 2, BUFFERING: 3, CUED: 5 },
        u,
        t = !1;
      (function (q) {
        Z.__ytl = q;
        Z.__ytl.h = "ytl";
        Z.__ytl.isVendorTemplate = !0;
        Z.__ytl.priorityOverride = 0;
      })(function (q) {
        q.vtp_triggerStartOption
          ? n(q)
          : pi(function () {
              n(q);
            });
      });
    })();

  (Z.g.cid = ["google"]),
    (function () {
      (function (a) {
        Z.__cid = a;
        Z.__cid.h = "cid";
        Z.__cid.isVendorTemplate = !0;
        Z.__cid.priorityOverride = 0;
      })(function () {
        return R.H;
      });
    })();

  (Z.g.aev = ["google"]),
    (function () {
      function a(t, q, v) {
        var y = t || Kd(q, "gtm");
        if (y) return y[v];
      }
      function b(t, q, v, y, A) {
        A || (A = "element");
        var w = q + "." + v,
          z;
        if (p.hasOwnProperty(w)) z = p[w];
        else {
          var x = a(t, q, A);
          if (x && ((z = y(x)), (p[w] = z), r.push(w), 35 < r.length)) {
            var C = r.shift();
            delete p[C];
          }
        }
        return z;
      }
      function c(t, q, v, y) {
        var A = a(t, q, u[v]);
        return void 0 !== A ? A : y;
      }
      function d(t, q) {
        if (!t) return !1;
        var v = e(xp());
        ua(q) ||
          (q = String(q || "")
            .replace(/\s+/g, "")
            .split(","));
        for (var y = [v], A = 0; A < q.length; A++) {
          var w = q[A];
          if (w.hasOwnProperty("is_regex"))
            if (w.is_regex)
              try {
                w = new RegExp(w.domain);
              } catch (C) {
                continue;
              }
            else w = w.domain;
          var z = e(t);
          if (w instanceof RegExp) {
            if (w.test(z)) return !1;
          } else {
            var x = w;
            if (0 != x.length) {
              if (0 <= z.indexOf(x)) return !1;
              y.push(e(x));
            }
          }
        }
        return !tq(t, y);
      }
      function e(t) {
        n.test(t) || (t = "http://" + t);
        return Ef(Gf(t), "HOST", !0);
      }
      function f(t, q, v, y) {
        switch (t) {
          case "SUBMIT_TEXT":
            return b(q, v, "FORM." + t, g, "formSubmitElement") || y;
          case "LENGTH":
            var A = b(q, v, "FORM." + t, k);
            return void 0 === A ? y : A;
          case "INTERACTED_FIELD_ID":
            return m(q, v, "id", y);
          case "INTERACTED_FIELD_NAME":
            return m(q, v, "name", y);
          case "INTERACTED_FIELD_TYPE":
            return m(q, v, "type", y);
          case "INTERACTED_FIELD_POSITION":
            var w = a(q, v, "interactedFormFieldPosition");
            return void 0 === w ? y : w;
          case "INTERACT_SEQUENCE_NUMBER":
            var z = a(q, v, "interactSequenceNumber");
            return void 0 === z ? y : z;
          default:
            return y;
        }
      }
      function g(t) {
        switch (t.tagName.toLowerCase()) {
          case "input":
            return xb(t, "value");
          case "button":
            return yb(t);
          default:
            return null;
        }
      }
      function k(t) {
        if ("form" === t.tagName.toLowerCase() && t.elements) {
          for (var q = 0, v = 0; v < t.elements.length; v++) dp(t.elements[v]) && q++;
          return q;
        }
      }
      function m(t, q, v, y) {
        var A = a(t, q, "interactedFormField");
        return (A && xb(A, v)) || y;
      }
      var n = /^https?:\/\//i,
        p = {},
        r = [],
        u = { ATTRIBUTE: "elementAttribute", CLASSES: "elementClasses", ELEMENT: "element", ID: "elementId", HISTORY_CHANGE_SOURCE: "historyChangeSource", HISTORY_NEW_STATE: "newHistoryState", HISTORY_NEW_URL_FRAGMENT: "newUrlFragment", HISTORY_OLD_STATE: "oldHistoryState", HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment", TARGET: "elementTarget" };
      (function (t) {
        Z.__aev = t;
        Z.__aev.h = "aev";
        Z.__aev.isVendorTemplate = !0;
        Z.__aev.priorityOverride = 0;
      })(function (t) {
        var q = t.vtp_gtmEventId,
          v = t.vtp_defaultValue,
          y = t.vtp_varType,
          A;
        t.vtp_gtmCachedValues && (A = t.vtp_gtmCachedValues.gtm);
        switch (y) {
          case "TAG_NAME":
            var w = a(A, q, "element");
            return (w && w.tagName) || v;
          case "TEXT":
            return b(A, q, y, yb) || v;
          case "URL":
            var z;
            a: {
              var x = String(a(A, q, "elementUrl") || v || ""),
                C = Gf(x),
                E = String(t.vtp_component || "URL");
              switch (E) {
                case "URL":
                  z = x;
                  break a;
                case "IS_OUTBOUND":
                  z = d(x, t.vtp_affiliatedDomains);
                  break a;
                default:
                  z = Ef(C, E, t.vtp_stripWww, t.vtp_defaultPages, t.vtp_queryKey);
              }
            }
            return z;
          case "ATTRIBUTE":
            var D;
            if (void 0 === t.vtp_attribute) D = c(A, q, y, v);
            else {
              var G = t.vtp_attribute,
                Q = a(A, q, "element");
              D = (Q && xb(Q, G)) || v || "";
            }
            return D;
          case "MD":
            var J = t.vtp_mdValue,
              I = b(A, q, "MD", pp);
            return J && I ? sp(I, J) || v : I || v;
          case "FORM":
            return f(String(t.vtp_component || "SUBMIT_TEXT"), A, q, v);
          default:
            var N = c(A, q, y, v);
            Jp(N, "aev", t.vtp_gtmEventId);
            return N;
        }
      });
    })();
  (Z.g.gas = ["google"]),
    (function () {
      (function (a) {
        Z.__gas = a;
        Z.__gas.h = "gas";
        Z.__gas.isVendorTemplate = !0;
        Z.__gas.priorityOverride = 0;
      })(function (a) {
        var b = K(a),
          c = b;
        c[Kb.ob] = null;
        c[Kb.Jh] = null;
        var d = (b = c);
        d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
        var e = d.vtp_cookieDomain;
        void 0 !== e && (d.vtp_fieldsToSet.push({ fieldName: "cookieDomain", value: e }), delete d.vtp_cookieDomain);
        return b;
      });
    })();

  (Z.g.fsl = []),
    (function () {
      function a() {
        var e = X("document"),
          f = c(),
          g = HTMLFormElement.prototype.submit;
        vb(
          e,
          "click",
          function (k) {
            var m = k.target;
            if (m && (m = Ab(m, ["button", "input"], 100)) && ("submit" == m.type || "image" == m.type) && m.name && xb(m, "value")) {
              var n;
              m.form ? (m.form.tagName ? (n = m.form) : (n = F.getElementById(m.form))) : (n = Ab(m, ["form"], 100));
              n && f.store(n, m);
            }
          },
          !1
        );
        vb(
          e,
          "submit",
          function (k) {
            var m = k.target;
            if (!m) return k.returnValue;
            var n = k.defaultPrevented || !1 === k.returnValue,
              p = b(m) && !n,
              r = f.get(m),
              u = !0;
            if (
              d(
                m,
                function () {
                  if (u) {
                    var t;
                    r && ((t = e.createElement("input")), (t.type = "hidden"), (t.name = r.name), (t.value = r.value), m.appendChild(t));
                    g.call(m);
                    t && m.removeChild(t);
                  }
                },
                n,
                p,
                r
              )
            )
              u = !1;
            else return n || (k.preventDefault && k.preventDefault(), (k.returnValue = !1)), !1;
            return k.returnValue;
          },
          !1
        );
        HTMLFormElement.prototype.submit = function () {
          var k = this,
            m = b(k),
            n = !0;
          d(
            k,
            function () {
              n && g.call(k);
            },
            !1,
            m
          ) && (g.call(k), (n = !1));
        };
      }
      function b(e) {
        var f = e.target;
        return f && "_self" !== f && "_parent" !== f && "_top" !== f ? !1 : !0;
      }
      function c() {
        var e = [],
          f = function (g) {
            return wa(e, function (k) {
              return k.form === g;
            });
          };
        return {
          store: function (g, k) {
            var m = f(g);
            m ? (m.button = k) : e.push({ form: g, button: k });
          },
          get: function (g) {
            var k = f(g);
            return k ? k.button : null;
          },
        };
      }
      function d(e, f, g, k, m) {
        var n = ap("fsl", g ? "nv.mwt" : "mwt", 0),
          p;
        p = g ? ap("fsl", "nv.ids", []) : ap("fsl", "ids", []);
        if (!p.length) return !0;
        var r = Xo(e, "gtm.formSubmit", p),
          u = e.action;
        u && u.tagName && (u = e.cloneNode(!1).action);
        r["gtm.elementUrl"] = u;
        m && (r["gtm.formSubmitElement"] = m);
        if (k && n) {
          if (!Bp(r, Jo(f, n), n)) return !1;
        } else Bp(r, function () {}, n || 2e3);
        return !0;
      }
      (function (e) {
        Z.__fsl = e;
        Z.__fsl.h = "fsl";
        Z.__fsl.isVendorTemplate = !0;
        Z.__fsl.priorityOverride = 0;
      })(function (e) {
        var f = e.vtp_waitForTags,
          g = e.vtp_checkValidation,
          k = Number(e.vtp_waitForTagsTimeout);
        if (!k || 0 >= k) k = 2e3;
        var m = e.vtp_uniqueTriggerId || "0";
        if (f) {
          var n = function (r) {
            return Math.max(k, r);
          };
          $o("fsl", "mwt", n, 0);
          g || $o("fsl", "nv.mwt", n, 0);
        }
        var p = function (r) {
          r.push(m);
          return r;
        };
        $o("fsl", "ids", p, []);
        g || $o("fsl", "nv.ids", p, []);
        Gp("fsl") || (a(), Hp("fsl"));
        H(e.vtp_gtmOnSuccess);
      });
    })();
  (Z.g.smm = ["google"]),
    (function () {
      (function (a) {
        Z.__smm = a;
        Z.__smm.h = "smm";
        Z.__smm.isVendorTemplate = !0;
        Z.__smm.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_input,
          c = uq(a.vtp_map, "key", "value") || {},
          d = c.hasOwnProperty(b) ? c[b] : a.vtp_defaultValue;
        Jp(d, "smm", a.vtp_gtmEventId);
        return d;
      });
    })();

  (Z.g.hid = ["google"]),
    (function () {
      (function (a) {
        Z.__hid = a;
        Z.__hid.h = "hid";
        Z.__hid.isVendorTemplate = !0;
        Z.__hid.priorityOverride = 0;
      })(function () {
        return Uo.Yc;
      });
    })();

  (Z.g.lcl = []),
    (function () {
      function a() {
        var c = X("document"),
          d = 0,
          e = function (f) {
            var g = f.target;
            if (g && 3 !== f.which && !(f.Gi || (f.timeStamp && f.timeStamp === d))) {
              d = f.timeStamp;
              g = Ab(g, ["a", "area"], 100);
              if (!g) return f.returnValue;
              var k = f.defaultPrevented || !1 === f.returnValue,
                m = ap("lcl", k ? "nv.mwt" : "mwt", 0),
                n;
              n = k ? ap("lcl", "nv.ids", []) : ap("lcl", "ids", []);
              if (n.length) {
                var p = Xo(g, "gtm.linkClick", n);
                if (b(f, g, c) && !k && m && g.href) {
                  var r = !!wa(String(Cb(g, "rel") || "").split(" "), function (v) {
                    return "noreferrer" === v.toLowerCase();
                  });
                  r && id(36);
                  var u = X((Cb(g, "target") || "_self").substring(1)),
                    t = !0,
                    q = Jo(function () {
                      var v;
                      if ((v = t && u)) {
                        var y;
                        a: if (r) {
                          var A;
                          try {
                            A = new MouseEvent(f.type, { bubbles: !0 });
                          } catch (w) {
                            if (!c.createEvent) {
                              y = !1;
                              break a;
                            }
                            A = c.createEvent("MouseEvents");
                            A.initEvent(f.type, !0, !0);
                          }
                          A.Gi = !0;
                          f.target.dispatchEvent(A);
                          y = !0;
                        } else y = !1;
                        v = !y;
                      }
                      v && (u.location.href = Cb(g, "href"));
                    }, m);
                  if (Bp(p, q, m)) t = !1;
                  else return f.preventDefault && f.preventDefault(), (f.returnValue = !1);
                } else Bp(p, function () {}, m || 2e3);
                return !0;
              }
            }
          };
        vb(c, "click", e, !1);
        vb(c, "auxclick", e, !1);
      }
      function b(c, d, e) {
        if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
        var f = Cb(d, "href"),
          g = f.indexOf("#"),
          k = Cb(d, "target");
        if ((k && "_self" !== k && "_parent" !== k && "_top" !== k) || 0 === g) return !1;
        if (0 < g) {
          var m = zp(f),
            n = zp(e.location);
          return m !== n;
        }
        return !0;
      }
      (function (c) {
        Z.__lcl = c;
        Z.__lcl.h = "lcl";
        Z.__lcl.isVendorTemplate = !0;
        Z.__lcl.priorityOverride = 0;
      })(function (c) {
        var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
          e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
          f = Number(c.vtp_waitForTagsTimeout);
        if (!f || 0 >= f) f = 2e3;
        var g = c.vtp_uniqueTriggerId || "0";
        if (d) {
          var k = function (n) {
            return Math.max(f, n);
          };
          $o("lcl", "mwt", k, 0);
          e || $o("lcl", "nv.mwt", k, 0);
        }
        var m = function (n) {
          n.push(g);
          return n;
        };
        $o("lcl", "ids", m, []);
        e || $o("lcl", "nv.ids", m, []);
        Gp("lcl") || (a(), Hp("lcl"));
        H(c.vtp_gtmOnSuccess);
      });
    })();
  var jt = {};
  jt.dataLayer = Fd;
  jt.callback = function (a) {
    td.hasOwnProperty(a) && sa(td[a]) && td[a]();
    delete td[a];
  };
  jt.bootstrap = 0;
  jt._spx = !1;
  (function (a) {
    if (!B["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (F.referrer) {
        var c = Gf(F.referrer);
        b = "cct.google" === Df(c, "host");
      }
      if (!b) {
        var d = lg("googTaggyReferrer");
        b = d.length && d[0].length;
      }
      b && ((B["__TAGGY_INSTALLED"] = !0), ob("https://cct.google/taggy/agent.js"));
    }
    var f = function (r) {
        var u = "GTM",
          t = "GTM";
        var q = B["google.tagmanager.debugui2.queue"];
        q || ((q = []), (B["google.tagmanager.debugui2.queue"] = q), ob("https://" + R.Cd + "/debug/bootstrap?id=" + R.H + "&src=" + t + "&cond=" + r + "&gtm=" + qk()));
        var v = { messageType: "CONTAINER_STARTING", data: { scriptSource: ib, containerProduct: u, debug: !1, id: R.H } };
        v.data.resume = function () {
          a();
        };
        R.bh && (v.data.initialPublish = !0);
        q.push(v);
      },
      g = void 0,
      k = Ef(B.location, "query", !1, void 0, "gtm_debug");
    So(k) && (g = 2);
    if (!g && F.referrer) {
      var m = Gf(F.referrer);
      "tagassistant.google.com" === Df(m, "host") && (g = 3);
    }
    if (!g) {
      var n = lg("__TAG_ASSISTANT");
      n.length && n[0].length && (g = 4);
    }
    if (!g) {
      var p = F.documentElement.getAttribute("data-tag-assistant-present");
      So(p) && (g = 5);
    }
    g && ib ? f(g) : a();
  })(function () {
    var a = !1;
    a && yi("INIT");
    Yd().o();
    Nk();
    qh.enable_gbraid_cookie_write = !0;
    var b = !!U[R.H];
    if (b) {
      var c = U.zones;
      c && c.unregisterChild(R.H);
    } else {
      for (var g = data.resource || {}, k = g.macros || [], m = 0; m < k.length; m++) gc.push(k[m]);
      for (var n = g.tags || [], p = 0; p < n.length; p++) kc.push(n[p]);
      for (var r = g.predicates || [], u = 0; u < r.length; u++) jc.push(r[u]);
      for (var t = g.rules || [], q = 0; q < t.length; q++) {
        for (var v = t[q], y = {}, A = 0; A < v.length; A++) y[v[A][0]] = Array.prototype.slice.call(v[A], 1);
        hc.push(y);
      }
      mc = Z;
      nc = lq;
      U[R.H] = jt;
      Ma(ud, Z.g);
      pc = xc;
      Ro();
      ki = !1;
      li = 0;
      if (("interactive" == F.readyState && !F.createEventObject) || "complete" == F.readyState) ni();
      else {
        vb(F, "DOMContentLoaded", ni);
        vb(F, "readystatechange", ni);
        if (F.createEventObject && F.documentElement.doScroll) {
          var w = !0;
          try {
            w = !B.frameElement;
          } catch (D) {}
          w && oi();
        }
        vb(B, "load", ni);
      }
      go = !1;
      "complete" === F.readyState ? io() : vb(B, "load", io);
      Dj && B.setInterval(xj, 864e5);
      rd = Ja();
      if (a) {
        var E = zi("INIT");
      }
    }
  });
})();
