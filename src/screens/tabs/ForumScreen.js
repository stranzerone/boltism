import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const forumPosts = [
  {
    id: '1',
    author: 'John Doe',
    authorUnit: 'A-301',
    title: 'Maintenance Schedule',
    content: 'Hey neighbors! Just a reminder that elevator maintenance is scheduled for tomorrow from 10 AM to 2 PM. Plan accordingly!',
    time: '2 hours ago',
    likes: 15,
    comments: 8,
    liked: true,
  },
  {
    id: '2',
    author: 'Jane Smith',
    authorUnit: 'B-105',
    title: 'Looking for a Plumber',
    content: 'Can anyone recommend a good plumber for fixing a leaky faucet? Need someone reliable and who can come on short notice.',
    time: '5 hours ago',
    likes: 3,
    comments: 12,
    liked: false,
  },
  {
    id: '3',
    author: 'Michael Johnson',
    authorUnit: 'C-204',
    title: 'Weekend Cleanup Drive',
    content: 'Let\'s organize a weekend cleanup drive in our complex. Anyone interested can meet this Saturday at 9 AM near the garden area.',
    time: '1 day ago',
    likes: 32,
    comments: 21,
    liked: true,
  },
];

const ForumScreen = () => {
  const renderPostItem = ({ item }) => (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <View style={styles.authorContainer}>
          <View style={styles.authorAvatar}>
            <Text style={styles.authorInitial}>{item.author.charAt(0)}</Text>
          </View>
          <View>
            <Text style={styles.authorName}>{item.author}</Text>
            <Text style={styles.authorMeta}>{item.authorUnit} • {item.time}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={20} color="#757575" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.postContent}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postText}>{item.content}</Text>
      </View>
      
      <View style={styles.postActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name={item.liked ? "heart" : "heart-outline"} size={22} color={item.liked ? "#F44336" : "#757575"} />
          <Text style={[styles.actionText, item.liked && {color: "#F44336"}]}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={22} color="#757575" />
          <Text style={styles.actionText}>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="share-social-outline" size={22} color="#757575" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Community Forum</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={18} color="#1E88E5" />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={forumPosts}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.postList}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <TouchableOpacity style={styles.createPostButton}>
            <Ionicons name="create-outline" size={18} color="white" />
            <Text style={styles.createPostText}>Create New Post</Text>
          </TouchableOpacity>
        }
      />
      
      <TouchableOpacity style={styles.fabButton}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    fontSize: 14,
    color: '#1E88E5',
    marginLeft: 4,
  },
  postList: {
    padding: 16,
    paddingBottom: 80,
  },
  createPostButton: {
    flexDirection: 'row',
    backgroundColor: '#1E88E5',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  createPostText: {
    color: 'white',
    fontWeight: '500',
    marginLeft: 8,
  },
  postCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1E88E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  authorInitial: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  authorName: {
    fontSize: 14,
    fontWeight: '500',
  },
  authorMeta: {
    fontSize: 12,
    color: '#9E9E9E',
  },
  postContent: {
    marginBottom: 16,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#424242',
  },
  postActions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    paddingTop: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  actionText: {
    fontSize: 14,
    color: '#757575',
    marginLeft: 4,
  },
  fabButton: {
    position: 'absolute',
    right: 16,
    bottom: 70,
    backgroundColor: '#1E88E5',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default ForumScreen;