package simpleboard.crud.entity;

import jakarta.persistence.*;

@Entity
@Table(name="board")
public class Board {
    // field

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="board_title")
    private String boardTitle;

    @Column(name="board_post")
    private String boardPost;

    @Column(name="board_done")
    private boolean boardDone;

    // 생성자
    public Board() {
    }

    public Board(String boardTitle, String boardPost, boolean boardDone) {
        this.boardTitle = boardTitle;
        this.boardPost = boardPost;
        this.boardDone = boardDone;
    }

    // getter/setter

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBoardTitle() {
        return boardTitle;
    }

    public void setBoardTitle(String boardTitle) {
        this.boardTitle = boardTitle;
    }

    public String getBoardPost() {
        return boardPost;
    }

    public void setBoardPost(String boardPost) {
        this.boardPost = boardPost;
    }

    public boolean isBoardDone() {
        return boardDone;
    }

    public void setBoardDone(boolean boardDone) {
        this.boardDone = boardDone;
    }

    // toString

    @Override
    public String toString() {
        return "Board{" +
                "id=" + id +
                ", boardTitle='" + boardTitle + '\'' +
                ", boardPost='" + boardPost + '\'' +
                ", boardDone=" + boardDone +
                '}';
    }
}
