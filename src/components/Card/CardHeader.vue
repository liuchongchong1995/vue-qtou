<script>
    import { mergeData } from 'vue-functional-data-merge'
    import sharedCardProps from './shared-card-props'

    export default {
        name: 'CardHeader',
        functional: true,
        props: sharedCardProps,
        render (h, { props, data, children }) {
            return h(
                props.tag || 'div',
                mergeData(data, {
                    staticClass: 'card-header',
                    class: [
                        {
                            [`text-${props.align}`]: props.align,
                            [`bg-${props.color}`]: props.color,
                            [`border-${props.borderColor}`]: props.borderColor,
                            [`text-${props.textColor}`]: props.textColor
                        }
                    ]
                }),
                children
            )
        }
    }
</script>