import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getCourseNumber } from '../utils/course';

const Course = ({ course, isDisabled, isSelected, select, view }) => (
    <TouchableOpacity style={styles[isSelected ? 'courseButtonSelected' : isDisabled ? 'courseButtonDisabled' : 'courseButton']} 
    onPress={() => { if (!isDisabled) select(course); }} 
    onLongPress={() => view(course)}>
        <Text style={styles.courseText}>
            {`CS ${getCourseNumber(course)}\n${course.meets}`}
        </Text>
    </TouchableOpacity>
);

const courseButtonBase = {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    height: 60,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
}

const styles = StyleSheet.create({
    courseButton: {
        ...courseButtonBase,
        backgroundColor: '#66b0ff',
    },
    courseButtonSelected: {
        ...courseButtonBase,
        backgroundColor: '#004a99',
    },
    courseButtonDisabled: {
        ...courseButtonBase,
        backgroundColor: '#d3d3d3',
    },
    courseText: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
    },
})

export default Course;