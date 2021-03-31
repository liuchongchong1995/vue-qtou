<script>
    import { mergeData } from 'vue-functional-data-merge'
    import sharedCardProps from './shared-card-props'

    export default {
        name: 'CardFooter',
        functional: true,
        props: sharedCardProps,
        render (h, { props, data, children }) {
            return h(
                props.tag || 'footer',
                mergeData(data, {
                    staticClass: 'card-footer',
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