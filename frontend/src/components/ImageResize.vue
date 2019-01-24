<template>
  <div>
    <vue-avatar
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
    <button v-on:click="saveClicked">Get image</button>
    <br>
    <img ref="image">
  </div>
</template>

<script>
/* eslint-disable */
  import {VueAvatar} from 'vue-avatar-editor-improved'
  import {VueAvatarEditor} from 'vue-avatar-editor-improved'

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
        color: [0, 0, 72]
      }
    },
    name: "ImageResize",
    methods: {
      onImageReady: function () {
        this.scale = 1
        this.rotation = 0
      },
      saveClicked () {
        var img = this.$refs.vueavatar.getImageScaled()
        this.$refs.image.src = img.toDataURL()
      }
    }
  }
</script>

<style scoped>

</style>
