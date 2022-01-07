import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Node {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  value: number;

  @Column({ nullable: true })
  symbol: string;

  @ManyToOne(type => Node)
  @JoinColumn()
  parent: Node;

  @OneToMany(
    type => Node,
    node => node.parent,
    { cascade: true },
  )
  children: Node[];
}
