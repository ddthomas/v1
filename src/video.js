import Video from 'react-native-video';


<Video 
       source={{uri: "https://stream.mux.com/your-playback-id.m3u8"}}   
       ref={(ref) => {
         this.player = ref
       }}  // Store reference
       onBuffer={this.onBuffer} // Callback when remote video is buffering
       onError={this.videoError} // Callback when video cannot be loaded
       style={styles.backgroundVideo} />

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});