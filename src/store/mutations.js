export default {
    updateCategory(state, categories) {
        state.categories = categories;
    },
    updateArticle(state, article) {
        state.article = article;
    },
    updateUser(state, user) {
        state.userInfo = user;
    },
    addCategory(state, cate) {
        state.categories.push({title: cate});
    }
}
