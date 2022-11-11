const CourseSelector = ({courses}) => {
    const [selected, setSelected] = useState([]);
  
    const toggle = course => setSelected(selected => (
      selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
    ));
  
    return (
      <View style={styles.courseList}>
        {
          courses.map(course => (
            <Course key={course.id} course={course}
              isDisabled={hasConflict(course, selected)}
              isSelected={selected.includes(course) ? '#004a99' : '#66b0ff'}
              select={toggle}
            />
          ))
        }
      </View>
    );
  };