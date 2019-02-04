<template>
    <page :uri="uri"/>
</template>

<script>
    import Page from '@/components/Page'
    import Category from '@/mixins/Category'
    export default {
        name: 'Music',
        mixins: [Category],
        components: {
            Page,
        },
        data(){
            return {
                categoryId: 10,
            };
        },
    }
</script>
