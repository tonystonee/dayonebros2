export default {
    data(){
        return {
            maxResults: 50,
        };
    },
    computed: {
        uri(){
            return `${this.$store.state.categoryEndpoint}?part=snippet&maxResults=${this.maxResults}&orderBy=viewCount&regionCode=us&relevanceLanguage=en&type=video&videoCategoryId=${this.categoryId}&key=${this.$store.state.key}`;
        },
    },
}