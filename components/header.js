import { connect } from 'react-redux'

class Header extends React.Component {
    render() {
        let { user } = this.props

        return (
          <header className="header container">
              <div>
                  { user.name } | <span className="header__points">{ user.points } PTS</span>
              </div>
      
              <style jsx>{`
                  .header {
                      display: flex;
                      justify-content: flex-end;  
                      padding: 1.25rem 2.5rem;
                  }

                  .header__points {
                      color: #FF4400;
                      font-weight: bold;
                  }
              `}</style>
          </header>
        );
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps, this)
    }
}

function mapStateToProps (state) {
  const { user } = state
  return { user }
}

export default connect(
  mapStateToProps
)(Header)