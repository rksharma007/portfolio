import React from "react";

const BASEANGLE = Math.PI / 360;
const R = 200;
const _focalLength = R * 1.5;

class Tag extends React.Component { // eslint-disable-next-line
	constructor(props) {
		super(props)
	}

	render() {
		const scale = _focalLength / (_focalLength - this.props.z)
		const alpha = (this.props.z + R) / (2 * R)

		const tagStyle = {
			display: 'inline-block',
			position: 'absolute',
			height: '50px',
			lineHeight: '50px',
			fontSize: '20px',
			textDecoration: 'none'
		}

		const otherStyle = {
			left: this.props.x + 'px',
			top: this.props.y + 'px',
			fontSize: 14 * scale + 'px',
			opacity: alpha + 0.5,
			color: this.props.color,
		}

		return (
            <>
                <p style={{ ...tagStyle, ...otherStyle }}>{this.props.name}</p>
                {/* <a href={this.props.url + '/' + this.props.name}  style={{ ...tagStyle, ...otherStyle }}>{this.props.name}</a> */}
            </>			
		)
	}
}

class TagCloud extends React.Component {
     
	constructor(props) {
		super(props) // eslint-disable-next-line
		{this.props.color && 
            (this.state = {
                color: this.props.color,
                speed: this.props.speed || 1,
                R: props.radius || 200,
                angleX: (props.speed || 1) * BASEANGLE,
                angleY: (props.speed || 1) * BASEANGLE,
                tags: [],
                timer: ''
            })
        } // eslint-disable-next-line
		{!this.props.color && 
			(this.state = {
				// color: randomcolor,
				speed: this.props.speed || 1,
				R: props.radius || 200,
				angleX: (props.speed || 1) * BASEANGLE,
				angleY: (props.speed || 1) * BASEANGLE,
				tags: [],
				timer: ''
		    })
        } 
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.tagName !== this.props.tagName) {
			const animation = () => {
				this.rotateX()
				this.rotateY()
				requestAnimationFrame(animation)
			}
			requestAnimationFrame(() => {
				animation()
			})
			this.move(nextProps.tagName)
		}
	}

	componentDidMount() {
		document.addEventListener('mousemove', (e) => {
			const angleX = 2 * (e.clientX / document.body.getBoundingClientRect().width - 0.5) * this.state.speed * BASEANGLE;
			const angleY = 2 * (e.clientY / document.body.getBoundingClientRect().height - 0.5) * this.state.speed * BASEANGLE;
			this.setState({
				angleX,
				angleY
			})
		})

		if (this.props.tagName.length === 0) {
			return
		}

		const animation = () => {
			this.rotateX()
			this.rotateY()
			requestAnimationFrame(animation)
		}

		requestAnimationFrame(() => {
			animation()
		})

		this.move(this.props.tagName)
	}

	// handleMouseover(e) {
	// 	const angleY = 2 * (e.clientX / document.body.getBoundingClientRect().width - 0.5) * this.state.speed * BASEANGLE;
	// 	const angleX = 2 * (e.clientY / document.body.getBoundingClientRect().height - 0.5) * this.state.speed * BASEANGLE;
	// 	this.setState({ angleX, angleY })
	// }

	// handleMouseout() {
	// 	const angleX = this.state.speed * BASEANGLE
	// 	const angleY = this.state.speed * BASEANGLE
	// 	this.setState({ angleX, angleY })
	// }

	move(tagName) {
		const len = tagName.length

		const tags = tagName.map((tag, i) => {
			const angleA = Math.acos((2 * (i + 1) - 1) / len - 1)
			const angleB = angleA * Math.sqrt(len * Math.PI)
			const z = this.state.R * Math.cos(angleA)
			const y = this.state.R * Math.sin(angleA) * Math.sin(angleB)
			const x = this.state.R * Math.sin(angleA) * Math.cos(angleB)
			const randomcolor = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
			var selectedcolor;
			if(this.state.color){
				selectedcolor = this.state.color;
			} else{
				selectedcolor = randomcolor;
			}
			const color = selectedcolor;
			const tagProps = {
				x,
				y,
				z,
				name: tag,
				color,
			}

			return tagProps
		})

		this.setState({ tags: tags })
	}

	rotateX() {
		let cos = Math.cos(this.state.angleX),
			sin = Math.sin(this.state.angleX);
		const tags = this.state.tags.map((tag) => {
			let y = tag.y * cos - tag.z * sin
			let	z = tag.z * cos + tag.y * sin
			tag.y = y
			tag.z = z

			return tag
		});

		this.setState({ tags: tags })
	}

	rotateY() {
		let cos = Math.cos(this.state.angleY)
		let sin = Math.sin(this.state.angleY)
		const tags = this.state.tags.map((tag) => {
			let x = tag.x * cos - tag.z * sin
			let	z = tag.z * cos + tag.x * sin
			tag.x = x;
			tag.z = z;

			return tag
		});

		this.setState({ tags: tags })
	}

	render() {
		const containerStyle = {
			width: '100%',
			heght: '100%'
		}
		const wrapperStyle = {
			position: 'relative',
			left: '50%',
			top: '100px'
		}
		return (
			<div className="tag-cloud-container" style={containerStyle}>
				<div className="wrapper" style={wrapperStyle}>
					{this.state.tags.map((tag, index) => {
						return <Tag url={this.props.url } key={index} {...tag}> </Tag>
					})}
				</div>
			</div>
		)
	}
}

const Skills = () => {
    const tagName = ['NextJs', 'Docker', 'CI/CD', 'Spring', 'Kafka', 'Jenkins', 'JavaScript', 'C++', 'Python', 'MongoDB', 'ExpressJs', 'ReactJs', 'NodeJs', 'HTML', 'CSS', 'Redux', 'MySQL', 'AWS', 'Stripe API', 'Razorpay API', 'GraphQL', 'OpenCV', 'IoT', 'PostgreSQL', 'Couchbase', 'Cassandra', 'OpenShift']
    var style = getComputedStyle(document.body);
    const globeRadius = style.getPropertyValue('--skills-globe-radius');
    return (
        <div className="tagcloud">
            <TagCloud speed={0.3} radius={globeRadius} color="var(--my-tertiary-color)" tagName={tagName}/>
        </div>
    )};
    
export default Skills;