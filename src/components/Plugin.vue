<template>
    <div 
        class="plugin"
        :class="{active: clicked}"
        tabindex="-1"
        @blur="clicked = false"
        ref="plugin"
        @click="clicked = true"
    >
        <div class="content"><slot></slot></div>
        <div 
            class="sticked"
            :class="stick" 
            v-for="(stick, index) in sticks" 
            :key="index"
            @mousedown="stickMouseDown(stick, $event)"
            :style="stickStyle(stick)"
        >
        </div>
    </div>
</template>

<script>
export default {
    name: 'Plugin',
    // props: {
    //     txt: {
    //         type: String,
    //         default: 'DEFAULT TEXT'
    //     }
    // },
    data() {
        return {
            clicked: false,
            sticks: [
                'top', 'bottom', 'left', 'right'
            ],

        }
    },
    mounted() {
        window.addEventListener('mousemove', this.onBodyMove)
        window.addEventListener('mouseup', this.onBodyLeave)
        this.$nextTick(() => this.setDivSize())
    },
    beforeUnmount() {
        window.removeEventListener('mousemove', this.onBodyMove)
        window.removeEventListener('mouseup', this.onBodyLeave)
    },
    methods: {
        stickStyle(position) {
            let style = {}
            if(position == 'top' || position == 'bottom') {
                style.width = '100%'
                style.height = 0
            }
            if(position == 'right' || position == 'left') {
                style.top = 0
                style.width = 0
                style.height ='100%'
            }
            style[position] = 0
            return style
        },
        setDivSize() {
            this.$refs.plugin.style.width = 
                this.$refs.plugin.children[0].children[0].offsetWidth + 'px'
        },
        stickMouseDown(stick, e) {
            this.stickDrag = true
            console.log('哪個stick', stick)
            console.log(e)
        },
        onBlur() {
            this.clicked = false
            this.stickDrag = false
        },
        onClick() {
            this.clicked = true
        },
        onBodyMove(e) {
            if(!this.stickDrag) return
            console.log('onBodyMove', e)
        },
        onBodyLeave(e) {
            if(!this.stickDrag) return
            console.log('onBodyLeave')
            this.stickDrag = false
            // from => x: 308 y: 220
            // to => x:  501 y: 219

        },
    },
}
</script>

<style scoped>
.plugin {
    position: relative;
}

.sticked {
    position: absolute;
    border: none;
    box-sizing: border-box;
}

.active .sticked {
    border: 1px dashed gray;
}

.active .sticked.top, .active .sticked.bottom {
    cursor: ns-resize;
}

.active .sticked.left, .active .sticked.right {
    cursor: ew-resize;
}
</style>