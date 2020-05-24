// Modifications and design elements Copyright 2020 developer tek use of this source code is governed under the MIT License. 
// Original source code Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license.
// Please refer to the LICENSE file for additional notices.
// https://opensource.google/docs/

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
    // Encode user input for special characters , / ? : @ & = + $ #
    var newURL = 'https://datasetsearch.research.google.com/search?query=' + encodeURIComponent(text);
    chrome.tabs.create({ url: newURL });
  });
