<template>
    <page :uri="uri"/>
</template>

<script>
    import Page from '@/components/Page'
    import Category from '@/mixins/Category'
    export default {
        name: 'Comedy',
        mixins: [Category],
        components: {
            Page,
        },
        data(){
            return {
                categoryId: 23,
            };
        },
    }
</script>
