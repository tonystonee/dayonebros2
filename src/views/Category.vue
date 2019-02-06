<template>
    <page :uri="uri"/>
</template>

<script>
    import Page from '@/components/Page'
    export default {
        name:  'News',
        components: {
            Page,
        },
        data(){
            return {
                maxResults: 50,
            };
        },
        computed: {
            categoryId(){
                return this.$route.matched[0].props.default.categoryId;
            },
            uri(){
                return `${this.$store.state.categoryEndpoint}?part=snippet&maxResults=${this.maxResults}&orderBy=viewCount&regionCode=us&relevanceLanguage=en&type=video&videoCategoryId=${this.categoryId}&key=${this.$store.state.key}`;
            },
        },
        mounted(){
            console.log(this.$name)
        }
    }
</script>

