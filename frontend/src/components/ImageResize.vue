<template>
  <div class="resize-content">
    <vue-avatar
      :width="400"
      :height="400"
      :rotation = "rotation"
      :borderRadius = "borderRadius"
      :scale = "scale"
      :border = "border"
      :color = "color"
      ref = "vueavatar"
      @vue-avatar-editor:image-ready = "onImageReady"
    >
    </vue-avatar>
    <br>
    <label>
      Zoom : {{scale}}x
      <br>
      <input
        type="range"
        min=1
        max=3
        step=0.02
        height="12px"
        v-model='scale'
      />
    </label>
    <br>
    <label>
      Rotation : {{rotation}}°
      <br>
      <input
        type="range"
        min=0
        max=360
        step=1
        v-model='rotation'
      />
    </label>
    <br>
    <label>
      Radius : {{borderRadius}}px
      <br>
      <input
        type="range"
        min=0
        max=200
        step=1
        v-model='borderRadius'
      />
    </label>
    <br>
    <button v-on:click="saveClicked">Save Image</button>
    <br>
    <img ref="image">
    <!--<input type="file" ref="testImage" @change="onImageReady"/>-->
  </div>
</template>

<script>
/* eslint-disable */
  import {VueAvatar} from 'vue-avatar-editor-improved'
  import {VueAvatarEditor} from 'vue-avatar-editor-improved'
  import axios from 'axios'

  export default {
    components: {
      VueAvatar,
      VueAvatarEditor
      // VueAvatarScale
    },
    data () {
      return {
        borderRadius: 0,
        rotation: 0,
        scale: 1,
        border: 1,
        color: [0, 0, 72],
        image: ''
      }
    },
    name: "ImageResize",
    methods: {
      onImageReady: function () {
        this.scale = 1
        this.rotation = 0
        var img = this.$refs.vueavatar.getImageScaled()
        // console.log(this.$refs.testImage)
        // console.log(this.$refs.vueavatar)
        // console.log(this.$refs.vueavatar.getImageScaled().toDataURL('image/png'))
        this.$refs.image.src = img.toDataURL('image/png')
      },
      saveClicked () {
        var img = this.$refs.vueavatar.getImageScaled()
        this.$refs.image.src = img.toDataURL()
        var img_b64 = img.toDataURL('image/png')
        var png = img_b64.split(',')[1];
        var the_file = new Blob([window.atob(png)],  {type: 'image/png', encoding: 'utf-8'});
        this.image = the_file
        console.log(the_file.type)
        var formData = new FormData()
        formData.append('scaledImage', this.image)
        var self = this
        axios.post('/server/product/upload', formData)
          .then(function (result) {
            console.log(result)
          })
      }
    }
  }
</script>

<style scoped>
  .resize-content {margin-bottom: 120px;}
  .resize-content img {box-shadow:0 3px 6px 0 #727272; width: 300px}
</style>
