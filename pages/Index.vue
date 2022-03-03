<script lang="ts">
import {
  Box,
  Camera,
  LambertMaterial,
  PointLight,
  Renderer,
  Scene,
  BasicMaterial,
  Texture,
} from 'troisjs';
import {defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'Home',

  components: {
    Box,
    Camera,
    LambertMaterial,
    PointLight,
    Renderer,
    Scene,
    BasicMaterial,
    Texture,
  },
  setup() {
    const renderer = ref(null);
    const box = ref(null);

    onMounted(() => {
      renderer?.value?.onBeforeRender(() => {
        box.value.mesh.rotation.x += 0.01;
      });
    });
    return { renderer, box };
  },
});
</script>
<template>
  <div class="ocean relative">
    <Renderer resize="window" orbit-ctrl ref="renderer" :alpha="true">
      <Camera :position="{ z: 10 }" />
      <Scene>
        <PointLight :position="{ y: 50, z: 50 }" />
        <AmbientLight />
        <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
          <BasicMaterial>
            <Texture src="/ink.jpg" refraction :refraction-ratio="0.95" />
          </BasicMaterial>
          <!-- <LambertMaterial /> -->
        </Box>
      </Scene>
    </Renderer>
  </div>
</template>

<style>
.ocean {
  background-image: url('/ocean.png');
  background-size: 100% 100%;
}
</style>
