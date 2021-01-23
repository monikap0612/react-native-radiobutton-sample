import React, { useState, useRef } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Text
} from 'react-native'
import WebView from 'react-native-webview'

const App = () => {
  const [canGoBack, setCanGoBack] = useState(false)
  const [canGoForward, setCanGoForward] = useState(false)
  const [currentUrl, setCurrentUrl] = useState('')

  const webviewRef = useRef(null)

  backButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goBack()
  }

  frontButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goForward()
  }
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={styles.flexContainer}>
        <WebView
          source={{ uri: 'https://refer-ui-two.vercel.app/?email=testWebView@mail.com&name=Test WebView&base_url=webview://&redirect_uri="http://localhost:3000/explore"&token=Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ilp4R2tPR1RCU19jRHZwTzRId3ZPRSJ9.eyJpc3MiOiJodHRwczovL3VzZWF2YWxhbmNoZS51cy5hdXRoMC5jb20vIiwic3ViIjoiWVNZWXluTGN6M3JPUXVXdGp5bjBGVXZTbmxGRFhMMUdAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vdXNlYXZhbGFuY2hlLnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjExMzc1MDA3LCJleHAiOjE2MTE0NjE0MDcsImF6cCI6IllTWVl5bkxjejNyT1F1V3RqeW4wRlV2U25sRkRYTDFHIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.wbEV7tSJz8iZ5vZbSNCz9TpPZ_HwHimdhA7eKD2YBk6jLyb_xOHYP0DQZBFaVyO-vAVjsKoVZyt3RzE4MTtr9ifhDNzFb_obP0sv00Hrz832na23GmWYSgvLq8iJ_tYKqYtW-YMTSPmaFg54lv2ZiPkFF-2HUxjPN3cWdBhwAiU-Ohr_aQoQkqBcD7nvIawD2QxEzVrhzpFMgHReywGHwG4uHTzccY_KYhxIW3LvpUv8aTyAU1YeCIGZM-jaFrvJgr_4vo_GUFTm4tbES2yc1YmmtgbI44-f4IWYa8IT4QZIWOkt-I83ziyMmO5Vlmuyc_wmx2fhF0oBxQAYsWBZvg' }}
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator
              color='black'
              size='large'
              style={styles.flexContainer}
            />
          )}
          ref={webviewRef}
          onNavigationStateChange={navState => {
            setCanGoBack(navState.canGoBack)
            setCanGoForward(navState.canGoForward)
            setCurrentUrl(navState.url)
          }}
        />
        <View style={styles.tabBarContainer}>
          <TouchableOpacity onPress={backButtonHandler}>
            <Text style={styles.button}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={frontButtonHandler}>
            <Text style={styles.button}>Forward</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      
    </>
  )
}

const styles = StyleSheet.create({
  flexContainer: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  tabBarContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: '#b43757'
  },
  button: {
    color: 'black',
    fontSize: 24
  }
})

export default App