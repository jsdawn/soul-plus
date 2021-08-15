<template>
  <div class="so-tabs">
    <div class="so-tabs__nav">
      <div class="so-tabs__item">标签1</div>
      <div class="so-tabs__item so-tabs__item--active">标签2</div>
    </div>

    <div class="so-tabs__content">
      <slot>内容</slot>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  getCurrentInstance,
  provide,
  useSlots,
  onMounted,
  onUpdated
} from 'vue';

const props = defineProps({
  modelValue: { type: String, default: '' }
});

const emit = defineEmits(['update:modelValue']);

const slots = useSlots();

const currentName = ref(props.modelValue || '0');
const instance = getCurrentInstance();
const panes = ref([]);
const paneStateMap = {};

provide('rootTabs', { props, currentName });

provide('updatePaneState', pane => {
  paneStateMap[pane.uid] = pane;
  console.log(paneStateMap);
});

const changeCurrentName = value => {
  currentName.value = value;
  emit('update:modelValue', value);
};

const getPaneInstanceFromSlot = (vnode, paneInstanceList) => {
  Array.from(vnode.children || []).forEach(node => {
    let type = node.type;
    type = type.name || type;
    if (type === 'SoTabPane' && node.component) {
    }
  });
};

const setPaneInstances = isForceUpdate => {
  if (slots.default) {
    const children = instance.subTree.children;
    const content = Array.from(children).find(child => {
      return child.props.class === 'so-tabs__content';
    });

    if (!content) return;

    // 根据实际生成的 slot 排序 pane 实例
    const paneInstanceList = getPaneInstanceFromSlot(content).map(
      paneComponent => {
        return paneStateMap[paneComponent.uid];
      }
    );

    // 新实例 paneInstanceList 对比 已有panes
    const panesChanged = !(
      paneInstanceList.length === panes.value.length &&
      paneInstanceList.every(
        (pane, index) => pane.uid === panes.value[index].uid
      )
    );

    if (isForceUpdate || panesChanged) {
      panes.value = paneInstanceList;
    }
  } else {
    panes.value = [];
  }
};

onUpdated(() => {
  setPaneInstances();
});

onMounted(() => {
  setPaneInstances();
});
</script>
