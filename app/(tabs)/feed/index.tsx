import { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { supabase } from '@/lib/supabae'

export default function App() {
  const [hangouts, setHangouts] = useState<any[]>([])

  useEffect(() => {
    getHangouts()
  }, [])

  async function getHangouts() {
    const { data } = await supabase.from('hangout').select()
    setHangouts(data || [])
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={hangouts}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }: { item: any }) => (
          <Text style={styles.item}>{item.title}</Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
})