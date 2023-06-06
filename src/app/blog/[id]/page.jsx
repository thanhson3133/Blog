import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    //next: { revalidate: 10 }, // Xác thực lại dữ liệu sau mỗi 10s
    cache: "no-store", // không sử dụng bộ đệm
  });

  if (!res.ok) {
    // return notFound();
  }
  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>aaaa</p>
          <div className={styles.author}>
            <Image
              src={
                "https://deadline.com/wp-content/uploads/2023/03/Keanu-Reeves-john-wick-4.jpg"
              }
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Wick</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            alt=""
            src={
              "https://images.pexels.com/photos/12936135/pexels-photo-12936135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quos
          est doloribus in reprehenderit fugiat architecto aliquam natus
          quisquam, dolores eum rerum adipisci aperiam, corporis laudantium,
          explicabo aspernatur deleniti neque ad? Iste nam pariatur ipsa
          perspiciatis libero recusandae fuga impedit reiciendis vitae officia
          eius excepturi, et voluptas, sit dolore, officiis maiores. Ad earum,
          pariatur, animi explicabo est itaque, ut dolores sequi non amet
          perspiciatis sit? Blanditiis in commodi aliquid tempora ratione qui
          optio rem. Numquam eius animi minus ex totam eaque libero nihil? Ex,
          sequi inventore deleniti tenetur voluptates voluptas et at
          reprehenderit quisquam nulla sapiente aspernatur aperiam iste
          excepturi!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
