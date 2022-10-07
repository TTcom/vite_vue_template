<script setup>
    import { Background, BackgroundVariant,Handle, Position, MiniMap,MarkerType, VueFlow, useVueFlow } from '@braks/vue-flow'
    import { computed, h, onMounted, ref } from 'vue'
    import customNode from '~/components/flows/customNode.vue'
    import Sidebar from '~/components/Sidebar.vue'
    const presets = {
  sumi: '#1C1C1C',
  gofun: '#FFFFFB',
  byakuroku: '#A8D8B9',
  mizu: '#81C7D4',
  asagi: '#33A6B8',
  ukon: '#EFBB24',
  mushikuri: '#D9CD90',
  hiwa: '#BEC23F',
  ichigo: '#B5495B',
  kurenai: '#CB1B45',
  syojyohi: '#E83015',
  konjyo: '#113285',
  fuji: '#8B81C3',
  ayame: '#6F3381',
  torinoko: '#DAC9A6',
  kurotsurubami: '#0B1013',
  ohni: '#F05E1C',
  kokikuchinashi: '#FB9966',
  beniukon: '#E98B2A',
  sakura: '#FEDFE1',
  toki: '#EEA9A9',
    }
    const onDragOver = (event) => {
      // console.log("onDragOverEEEEEEEEEEEEEEEEEEE",event)
      event.preventDefault()
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move'
      }
}

const onDrop = (event) => {
  console.log("EEEEEEEEEEEEEEEEEEE",event)
  // const type = event.dataTransfer?.getData('application/vueflow')
  // const position = project({ x: event.clientX - 40, y: event.clientY - 18 })
  // const newNode = {
  //   id: getId(),
  //   type,
  //   position,
  //   label: `${type} node`,
  // }
  // addNodes([newNode])
}
const onDragStart = (event, nodeType) => {
  if (event.dataTransfer) {
    event.dataTransfer.setData('application/vueflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }
}
    const { getNode,onConnect,addEdges } = useVueFlow()
    onConnect((params) => {
      params.animated = true
      // params.markerEnd = MarkerType.ArrowClosed
      params.markerEnd={
        id: 'marker-success',
        type: MarkerType.Arrow,
      },
      params.style= () => ({
             stroke: "green",
             strokeWidth: "3"
      })
      addEdges([params])
   }) 

    const outputColorNode = computed(() => getNode.value('3'))
    
    const elements = ref([])
    
    const gradient = ref(false)
    const bgColor = ref(presets.ayame)
    const bgName = ref('AYAME')
    
    const connectionLineStyle = { stroke: '#fff' }
    
    // minimap stroke color functions
    const nodeStroke = (n) => {
      if (n.type === 'input') return '#0041d0'
      if (n.type === 'custom') return presets.sumi
      if (n.type === 'output') return '#ff0072'
      return '#eee'
    }
    
    const nodeColor = (n) => {
      if (n.type === 'custom') return bgColor.value
      return '#fff'
    }
    
    // output labels
    const outputColorLabel = () => h('div', {}, bgColor.value)
    const outputNameLabel = () => h('div', {}, bgName.value)
    
    const onChange = (color) => {
      gradient.value = false
      bgColor.value = color.value
      bgName.value = color.name
    
      outputColorNode.value.hidden = false
    }
    
    const onGradient = () => {
      gradient.value = true
      bgColor.value = null
      bgName.value = 'gradient'
    
      outputColorNode.value.hidden = true
    }
    
    onMounted(() => {
      elements.value = [
        {
          id: '1',
          type: 'custom',
          data: { color: bgColor },
          position: { x: 0, y: 50 },
        },
        {
              id: '2',
              label: 'Node 1',
              type: 'special',
              position: { x: 350, y: 50 },
         },
        // {
        //   id: '2',
        //   type: 'output',
        //   label: outputNameLabel,
        //   position: { x: 350, y: 25 },
        //   targetPosition: Position.Left,
        // },
        // {
        //   id: '3',
        //   type: 'output',
        //   label: outputColorLabel,
        //   position: { x: 350, y: 200 },
        //   targetPosition: Position.Left,
        // },
        // {
        //   id: 'e1a-2',
        //   source: '1',
        //   sourceHandle: 'a',
        //   target: '2',
        //   animated: true,
        //   style: () => ({
        //     stroke: bgColor.value,
        //     filter: 'invert(100%)',
        //   }),
        // },
        // {
        //   id: 'e1b-3',
        //   source: '1',
        //   sourceHandle: 'b',
        //   target: '3',
        //   animated: true,
        //   style: () => ({
        //     stroke: bgColor.value,
        //     filter: 'invert(100%)',
        //   }),
        // },
      ]
    })
</script>
    <template>
      
      <div flex class="h-100%"  @drop="onDrop">

        <Sidebar />
        <VueFlow
        v-model="elements"
        class="customnodeflow"
        @dragover="onDragOver"
      >
        <template #node-custom="props">
          <customNode :data="props.data" @change="onChange" @gradient="onGradient" />
        </template>
        <template #node-special="props">
           <div w-200px h-100px text-center class="bg-#81C7D4" rounded-10px>
            specialDiv
            <Handle id="a" type="source" animated="true" :position="Position.Left" />
           </div>
        </template>
        <Background :variant="BackgroundVariant.Dots" pattern-color="#d87070" gap="18" />
        <MiniMap :node-stroke-color="nodeStroke" :node-color="nodeColor" />
      </VueFlow>
      </div>  


    </template>
       <style>
        marker[id='id=marker-success&type=arrow'] polyline {
         stroke: green;
        }
       </style>
    