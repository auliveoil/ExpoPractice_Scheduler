import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import CourseList from '../components/CourseList';

const Banner = ({ title }) => (
    <Text style={styles.banner}>{title || '[loading...]'}</Text>
);

const ScheduleScreen = ({ navigation }) => {
    const [schedule, setSchedule] = useState({ title: '', courses: [] });

    const view = (course) => {
        navigation.navigate('CourseDetailScreen', { course });
    };

    const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';

    useEffect(() => {
        const fetchSchedule = async () => {
            const response = await fetch(url);
            if (!response.ok) throw response;
            const json = await response.json();
            setSchedule(json);
        };
        fetchSchedule();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Banner title={schedule.title} error={schedule.error} />
            <CourseList courses={schedule.courses} view={view} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
    },
    banner: {
        color: '#888',
        fontSize: 32,
    },
});

export default ScheduleScreen;