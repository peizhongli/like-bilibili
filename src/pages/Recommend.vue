<template>
  <div>
    <rotationChart></rotationChart>
    <videoList :items=lists></videoList>
  </div>
</template>
<script>
import videoList from '../components/videoList.vue'
import rotationChart from '../components/rotationChart.vue'

export default {
  data () {
    return {
      lists: ''
    }
  },
  components: {videoList, rotationChart},
  methods: {
    getList () {
      this.axios.get('https://api.apiopen.top/musicBroadcastingDetails?channelname=public_tuijian_spring').then((response) => {
        console.log(response.data.result.songlist)
        if (response.data.code === 200) {
          this.lists = response.data.result.songlist
        } else {
          console.log('error')
        }
      })
    }
  },
  created () {
    this.getList()
  }
}
</script>
