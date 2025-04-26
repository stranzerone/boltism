import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { colors } from '@/constants/theme';
import { Search, ThumbsUp, MessageCircle, Share2 } from 'lucide-react-native';

const DUMMY_POSTS = [
  {
    id: '1',
    author: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    time: '2 hours ago',
    content: 'Is anyone experiencing water supply issues in Block C today? It seems like the pressure is lower than usual.',
    likes: 12,
    comments: 8,
    image: null,
  },
  {
    id: '2',
    author: 'Michael Chen',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
    time: '5 hours ago',
    content: 'Found this beautiful spot in our community garden. Thought I\'d share!',
    likes: 24,
    comments: 3,
    image: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '3',
    author: 'Priya Sharma',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    time: '1 day ago',
    content: 'Reminder: Monthly association meeting this weekend at 11 AM in the community hall. Important topics to be discussed!',
    likes: 18,
    comments: 5,
    image: null,
  },
];

export default function ForumScreen() {
  const renderPost = ({ item }) => (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.postInfo}>
          <Text style={styles.authorName}>{item.author}</Text>
          <Text style={styles.postTime}>{item.time}</Text>
        </View>
      </View>
      
      <Text style={styles.postContent}>{item.content}</Text>
      
      {item.image && (
        <Image source={{ uri: item.image }} style={styles.postImage} />
      )}
      
      <View style={styles.postActions}>
        <TouchableOpacity style={styles.actionButton}>
          <ThumbsUp size={18} color={colors.textSecondary} />
          <Text style={styles.actionText}>{item.likes}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <MessageCircle size={18} color={colors.textSecondary} />
          <Text style={styles.actionText}>{item.comments}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Share2 size={18} color={colors.textSecondary} />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Community Forum</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Search size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.categoriesContainer}>
        <ScrollableCategories />
      </View>

      <FlatList
        data={DUMMY_POSTS}
        renderItem={renderPost}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.postsList}
        showsVerticalScrollIndicator={false}
      />
      
      <TouchableOpacity style={styles.createPostButton}>
        <Text style={styles.createPostText}>Create New Post</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function ScrollableCategories() {
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'announcements', name: 'Announcements' },
    { id: 'events', name: 'Events' },
    { id: 'maintenance', name: 'Maintenance' },
    { id: 'security', name: 'Security' },
    { id: 'general', name: 'General' },
  ];

  return (
    <View style={styles.categoriesWrapper}>
      <FlatList
        data={categories}
        renderItem={({ item, index }) => (
          <TouchableOpacity 
            style={[
              styles.categoryButton, 
              index === 0 && styles.activeCategoryButton
            ]}
          >
            <Text 
              style={[
                styles.categoryText, 
                index === 0 && styles.activeCategoryText
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.textPrimary,
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesContainer: {
    backgroundColor: colors.white,
    paddingBottom: 8,
  },
  categoriesWrapper: {
    paddingHorizontal: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: colors.backgroundLight,
  },
  activeCategoryButton: {
    backgroundColor: colors.primary,
  },
  categoryText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: colors.textPrimary,
  },
  activeCategoryText: {
    color: colors.white,
  },
  postsList: {
    padding: 16,
  },
  postCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  postInfo: {
    flex: 1,
  },
  authorName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    color: colors.textPrimary,
  },
  postTime: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: colors.textTertiary,
  },
  postContent: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: colors.textPrimary,
    lineHeight: 22,
    marginBottom: 12,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  postActions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  actionText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: colors.textSecondary,
    marginLeft: 6,
  },
  createPostButton: {
    backgroundColor: colors.primary,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  createPostText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    color: colors.white,
  },
});