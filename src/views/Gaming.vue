<template>
    <page :uri="uri"/>
</template>

<script>
    import Page from '@/components/Page'
    import Category from '@/mixins/Category'
    export default {
        name: 'Gaming',
        mixins: [Category],
        components: {
            Page,
        },
        data(){
            return {
                categoryId: 20,
            };
        },
    }
</script>
