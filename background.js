// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
    console.log('==>',text)
    // Encode user input for special characters , / ? : @ & = + $ #
    var newURL = 'http://go/' + encodeURIComponent(text);
    chrome.tabs.update({ url: newURL });
  });