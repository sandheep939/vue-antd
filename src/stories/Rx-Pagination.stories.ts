import type { Meta, StoryFn } from '@storybook/vue3';
import Pagination from '@/components/rx-pagination.vue';

interface PaginationPropsWithSlots {
  current: number;
  pageSize: number;
  total: number;
  disabled: boolean;
  showSizeChangeSlot: string;
}

export default {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    current: 1,
    pageSize: 10,
    total: 500,
    disabled: false,
    showSizeChangeSlot: 'Page Size Changed',
  },
  argTypes: {
    current: {
      control: 'number',
      description: 'The current page number',
    },
    pageSize: {
      control: 'number',
      description: 'The number of items per page',
    },
    total: {
      control: 'number',
      description: 'Total number of items',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable pagination',
    },
    showSizeChangeSlot: {
      control: 'text',
      description: 'Slot content for page size change event',
    },
  },
} as Meta;

const Template: StoryFn<PaginationPropsWithSlots> = (args) => ({
  components: { Pagination },
  setup() {
    return { args };
  },
  template: `
    <Pagination v-bind="args">
      <template #showSizeChange>{{ args.showSizeChangeSlot }}</template>
    </Pagination>
  `,
});

export const DefaultPagination = Template.bind({});
DefaultPagination.args = {
  current: 1,
  pageSize: 10,
  total: 500,
  disabled: false,
  showSizeChangeSlot: 'Page Size Changed',
};
