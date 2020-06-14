<template>
  <div :style="style" class="grid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'grid',
  props: {
    cap: [Array, Number], // 留白
    cols: [Array, Number], // 列分布: 3 | ['100px', '200px'] | [1, 2]
    rows: [Array, Number], // 行分布: 同上
  },

  computed: {
    style() {
      let { cap, cols, rows } = this
      // cap
      if (cap instanceof Array) {
        if (typeof cap[0] === 'number') {
          cap[0] += 'px'
        }
        if (typeof cap[1] === 'number') {
          cap[1] += 'px'
        }
        cap = cap.join(' ')
      } else if (typeof cap === 'number') {
        cap += 'px'
      }
      // cols
      if (cols instanceof Array) {
        for (let i = 0; i < cols.length; i++) {
          if (typeof cols[i] === 'number') {
            cols[i] = `${cols[i]}fr`
          }
        }
      } else if (typeof cols === 'number') {
        cols = `repeat(${cols}, 1fr)`
      }
      // rows
      if (rows instanceof Array) {
        for (let i = 0; i < rows.length; i++) {
          if (typeof rows[i] === 'number') {
            rows[i] = `${rows[i]}fr`
          }
        }
      } else if (typeof rows === 'number') {
        rows = `repeat(${rows}, 1fr)`
      }
      return {
        cap,
        'grid-template-columns': cols,
        'grid-template-rows': rows,
      }
    },
  }
}
</script>

<style>
.grid {
  display: grid;
}
</style>
