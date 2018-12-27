from django.urls import path

from articles.api.views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ArticleViewSet, basename='articles')
urlpatterns = router.urls



# from .views import (
#     ArticleListView, 
#     ArticleDetailView, 
#     ArticleCreateView,
#     ArticleUpdateView,
#     ArticleDestroyView
# )


# urlpatterns = [
#     path('', ArticleListView.as_view()),
#     path('create/', ArticleCreateView.as_view()),
#     path('<pk>', ArticleDetailView.as_view()),
#     path('<pk>/update/', ArticleUpdateView.as_view()),
#     path('<pk>/delete/', ArticleDestroyView.as_view()),
# ]