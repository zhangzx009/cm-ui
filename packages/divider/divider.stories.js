import {storiesOf} from '@storybook/vue'
import Divider from './src'

storiesOf('Divider', module).add('', () => ({
        components: {Divider},
        tempalte:
            `<cm-divider
        dashed
        :hairline="false"
        >
        </cm-divider>`
    })
)
/*
storiesOf('JTable', module)
    .add('with 7 items', () => ({
        components: { JTable },
        template:
            `
      <JTable
        :items="items"
      />
    `,
        data: () => ({
            items
        })
    }))
    .add('with 7 items + header', () => ({
        components: { JTable },
        template:
            `
      <JTable
        :header="header"
        :items="items"
      />
    `,
        data: () => ({
            header: [
                'Name',
                'Email'
            ],
            items
        })
    }))*/
